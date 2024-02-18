"use client";

import { ProducItem } from "@/components/ProductItem";
import { groq } from "next-sanity";
import Link from "next/link";
import { getCachedClient, getClient } from "../../../../sanity/lib/client";
import { IProduct } from "@/types";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const nextProductsQuery = groq`*[_type=="products" && _id > $lastId][0...8]{
  _id, name, image, overview, detail, price,
  "category": category->name

}

`;
const prevProductsQuery = groq`*[_type=="products" && _id < $lastId][0...8]{
  _id, name, image, overview, detail, price,
  "category": category->name

}
`;

export const AllProductList: React.FC<{
  initialData: IProduct[] | null;
  totalProductsCount: number;
}> = function ({ initialData, totalProductsCount }) {
  if (initialData === null) {
    toast.error(
      "Error fetching product list.. Please reload the page to try again...",
    );
  }
  const [products, setProducts] = useState<IProduct[]>(initialData || []);
  const numberOfItemsPerPage = 9;
  const searchParams = useSearchParams();

  // get the current page from the search params
  const currentPage = searchParams?.get("page") ?? 1;

  // calculate the number of pages
  const numberOfPages = Math.ceil(totalProductsCount / numberOfItemsPerPage);

  const numberPaginations = getNumberedPaginations(
    Number(currentPage),
    numberOfPages,
  );

  // The event handler that handles the fetch next page event
  const handleFetchPage = async (page: "next" | "prev" | number) => {
    console.log("dfjdflkjlk");
    let fetchItemPromise: Promise<IProduct[]>;
    // show loading
    // Using the clicked button name to determine wether to fetch the next page or the previous page
    if (page === "next") {
      fetchItemPromise = fetchProducts(
        products[products.length - 1]?._id,
        page,
      );
      const nextPage = await fetchItemPromise;
      setProducts(nextPage);
    } else if (page === "prev") {
      fetchItemPromise = fetchProducts(products[0]?._id, page);
      const prevPage = await fetchItemPromise;
      setProducts(prevPage);
    } else {
      fetchItemPromise = new Promise((resolve, reject) => {});
    }
    toast.promise(fetchItemPromise, {
      error: "Error fetching product list",
      loading: "Please wait.. fetching product list",
      success: "Successfully fetched product list",
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-3">
        {products.map((product) => (
          <Link key={product._id} href={`/products/${product._id}`}>
            <ProducItem key={product.name} {...product} />
          </Link>
        ))}
      </div>

      {/* TODO: CREATE PAGINATION COMPONENT */}
      <div className="mx-auto flex items-center justify-center space-x-3">
        {/* PREV BUTTON */}
        <button
          className="text-2xl hover:cursor-pointer hover:text-[#AFADB5]"
          disabled={!!totalProductsCount}
          onClick={() => handleFetchPage("prev")}
        >
          <FiChevronLeft onClick={() => console.log("jlkfjlkj")} />
        </button>
        {/* END PREV BUTTON */}

        {/* PAGE NUMBERS */}
        <div className="flex items-center">{numberPaginations}</div>
        {/* END NUMBERS */}

        {/* NEXT BUTTON */}
        <button
          className="text-2xl hover:cursor-pointer hover:text-[#AFADB5]"
          disabled={!!totalProductsCount}
          onClick={() => handleFetchPage("next")}
        >
          <FiChevronRight />
        </button>
        {/* END NEXT BUTTON */}
      </div>
    </>
  );
};

const fetchProducts = async (
  lastId: IProduct["_id"],
  page?: "next" | "prev",
): Promise<IProduct[]> => {
  // IMPLEMENTING PAGINATION
  let fetchedProducts: IProduct[] = [];
  // if (lastId == null) {
  //   fetchedProducts = await getClient().fetch<IProduct[]>(initialProductsQuery);
  // } else
  if (page === "prev") {
    try {
      fetchedProducts = await getClient().fetch<IProduct[]>(prevProductsQuery, {
        lastId,
      });
    } catch (e) {
      // TODO: SHOW ERROR MESSAGE
    }
  } else {
    fetchedProducts = await getClient().fetch<IProduct[]>(nextProductsQuery, {
      lastId,
    });
  }
  return fetchedProducts;
};

const getNumberedPaginations = (currentPage: number, numberOfPages: number) => {
  const paginationComponents: JSX.Element[] = [];
  // because we are showing the pagination of only the next two numbers after the current page
  // number, and also the last page number we can only show the ellipsis in a minimum of five pages,
  // for pages lesser than five, we show all paginations
  if (numberOfPages < 5) {
    for (let i = currentPage; i <= numberOfPages; i++) {
      paginationComponents.push(
        <PaginationComponent page={i} key={i} activePage={currentPage === i} />,
      );
    }
  } else {
    for (let i = currentPage; currentPage + 2; i++) {
      paginationComponents.push(
        <PaginationComponent page={i} activePage={currentPage === i} />,
      );
    }
    paginationComponents.push(<div className="inline-block h-10 w-9">...</div>);

    // The page number for the last page is equal to the numberof pages
    paginationComponents.push(
      <PaginationComponent
        page={numberOfPages}
        key={numberOfPages}
        activePage={currentPage === currentPage}
      />,
    );
  }
  return paginationComponents;
};

const PaginationComponent: React.FC<{ page: number; activePage?: boolean }> = ({
  page,
  activePage,
}) => {
  // TODO: IMPLEMENT ACTIVE IMAGES
  return (
    <button
      className={`${
        activePage ? "bg-primary text-white" : "bg-white text-title"
      }  inline-grid h-10 w-9 place-items-center border border-[#F9F9F9] text-center hover:cursor-pointer hover:bg-opacity-80`}
    >
      {page}
    </button>
  );
};
