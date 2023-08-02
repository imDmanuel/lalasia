"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

export const useDynamicSlidesPerView = function <
  TItem extends HTMLElement,
  TContainerRef extends HTMLElement
>({
  itemRef,
  containerRef,
  minWidth,
  initialValue = 1,
  minimumOffset = 0.3,
}: {
  itemRef: React.RefObject<TItem>;
  containerRef: React.RefObject<TContainerRef>;
  minWidth?: number;
  initialValue?: number;
  minimumOffset?: number;
}) {
  // hardcodning the min width
  const [slidesPerView, setSlidesPerView] = useState(initialValue);

  const calculateSlidesPerView = useCallback(() => {
    const slideItemWidth = (itemRef.current?.offsetWidth || minWidth)!;
    const containerWidth = containerRef.current?.offsetWidth!;

    // calculate the slides per view
    let slidesPerView = Math.round(containerWidth / slideItemWidth);
    if (Number.isInteger(slidesPerView)) {
      slidesPerView = slidesPerView + minimumOffset;
    }
    setSlidesPerView(slidesPerView);
    // console.table({ slideItemWidth, containerWidth, slidesPerView });
  }, [containerRef, itemRef, minWidth, minimumOffset]);

  useEffect(() => {
    // Calculate slidesperview and add a resize event handler to calculate it on resize
    calculateSlidesPerView();

    window.addEventListener("resize", calculateSlidesPerView);

    return () => window.removeEventListener("resize", calculateSlidesPerView);
  }, [calculateSlidesPerView]);

  return slidesPerView;
};
