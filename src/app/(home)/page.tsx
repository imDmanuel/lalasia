import Image from "next/image";
import headerCurlyImage from "@/assets/images/header-curly-image.svg";
import heroImage from "@/assets/images/hero-bg.png";
import benefitIcon1 from "@/assets/images/benefit-card-icon-1.svg";
import benefitIcon2 from "@/assets/images/benefit-card-icon-2.svg";
import benefitIcon3 from "@/assets/images/benefit-card-icon-3.svg";
import { ProductList } from "@/components/ProductList";
import { Suspense } from "react";
import featuredImage1 from "@/assets/images/featured-image-1.png";
import featuredImage2 from "@/assets/images/featured-image-2.png";
import featuredImage3 from "@/assets/images/featured-image-3.png";
import { Testimonials } from "@/app/(home)/Testimonials";
import Link from "next/link";
import { articles } from "@/mock-data";
import arrowLeftIcon from "@/assets/images/arrow-left-icon.svg";
import arrowRightIcon from "@/assets/images/arrow-right-icon.svg";
import { ArticleThumbnail } from "./ArticleThumbnail";
import { BenefitCard } from "./BenefitCard";
import { SearchProperty } from "@/components/SearchProperty";

export const Home = function () {
  return (
    <>
      <header>
        <div className="container text-center 2xl:mt-24 mt-12">
          <div className="relative">
            <h1 className="max-w-3xl mx-auto max-2xl:header-3p max-2xl:max-w-xs">
              Discover Furniture With High Quality Wood
            </h1>
            <p className="paragraph-3 max-w-3xl mx-auto mt-8 max-2xl:paragraph-1">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non. Purus parturient
              viverra nunc, tortor sit laoreet. Quam tincidunt aliquam
              adipiscing tempor.
            </p>
            <Image
              src={headerCurlyImage}
              alt=""
              className="absolute bottom-0 2xl:left-24 max-2xl:w-10 sm:left-12 left-0 max-2xl:top-0"
            />
          </div>
          <div className="relative mt-20">
            <div className="max-w-3xl mx-auto 2xl:top-0 2xl:left-1/2 2xl:-translate-x-1/2 w-full 2xl:-translate-y-1/2 2xl:absolute">
              <SearchProperty buttonText="Search" />
            </div>
            <Image className="w-full" src={heroImage} alt="" />
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="text-secondary font-bold text-lg max-2xl:text-sm">
              Benefits
            </div>
            <div className="flex justify-between mt-3 max-2xl:mt-2 space-x-52 max-2xl:flex-col max-2xl:space-y-4 max-2xl:space-x-0 ">
              <h2 className="max-w-md max-2xl:header-3 ">
                Benefits when using our services
              </h2>

              <p className="max-w-lg max-lg:paragraph-1">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
              </p>
            </div>

            {/* Benefit card list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
              <BenefitCard icon={benefitIcon1} title="Many Choices">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.
              </BenefitCard>
              <BenefitCard icon={benefitIcon2} title="Fast and On Time">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.
              </BenefitCard>
              <BenefitCard icon={benefitIcon3} title="Affordable Price">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.
              </BenefitCard>
            </div>
          </div>
        </section>

        <section className="mt-24 2xl:mt-44">
          <div className="font-bold text-secondary text-sm 2xl:text-lg text-center">
            Product
          </div>
          <h2 className="mt-2 mb-4 2xl:mt-3 2xl:mb-7 text-center max-2xl:text-2xl">
            Our popular product{" "}
          </h2>
          <p className="paragraph-1 2xl:paragraph-3 max-w-2xl text-center mx-auto mb-7 2xl:mb-12">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>

          {/* TODO: Replace loading text with skeleton */}
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </Suspense>
        </section>

        <section className="mt-24 2xl:mt-44">
          <div className="container">
            <div className="font-bold text-secondary text-sm 2xl:text-lg mb-2 2xl:mb-3">
              Our Product
            </div>
            <div className="flex flex-col sm:flex-row 2xl:gap-16 gap-7">
              <div className="w-full sm:w-1/2">
                <h2 className="max-w-lg max-2xl:header-3">
                  Crafted by talented and high quality material
                </h2>

                <p className="max-xl:paragraph-1 2xl:my-12 mt-4 mb-7">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non purus
                  parturient. morbi fermentum, vivamus et accumsan dui tincidunt
                  pulvinar
                </p>

                <button className="btn btn-primary max-sm:w-full">
                  Learn More
                </button>

                {/* TODO: REEXPORT THIS IMAGE FROM FIGMA */}
                <Image src={featuredImage1} alt="" />
              </div>
              <div className="w-full sm:w-1/2">
                {/* Stats */}
                <div className="flex gap-5 2xl:gap-12 max-2xl:justify-between 2xl:ml-auto">
                  <div>
                    <div className="font-bold 2xl:text-5xl text-title text-[1.375rem]">
                      20+
                    </div>
                    <p className="font-medium text-lg mt-3 max-2xl:paragraph-1">
                      Years of Experience
                    </p>
                  </div>
                  <div>
                    <div className="font-bold 2xl:text-5xl text-title text-[1.375rem]">
                      483
                    </div>
                    <p className="font-medium text-lg mt-3 max-2xl:paragraph-1">
                      Happy Client
                    </p>
                  </div>
                  <div>
                    <div className="font-bold 2xl:text-5xl text-title text-[1.375rem]">
                      150+
                    </div>
                    <p className="font-medium text-lg mt-3 max-2xl:paragraph-1">
                      Projects Finished
                    </p>
                  </div>
                </div>

                <Image src={featuredImage2} alt="" className="mt-14" />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-24 2xl:mt-44">
          <div className="container">
            <div className="font-bold text-secondary text-lg mb-3 text-center">
              Testimonials
            </div>
            <h2 className="text-center">What our customer say</h2>
            <p className="max-w-2xl mx-auto text-center 2xl:mt-7 2xl:mb-12 mt-4 mb-7">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>

          <Testimonials />
        </section>

        {/* ARTICLES THUMBNAILS */}
        <section className="mt-24 2xl:mt-44">
          <div className="container">
            <div className="font-bold text-secondary 2xl:text-lg  mb-3 :text-sm">
              Articles
            </div>
            <div className="flex gap-12 max-2xl:flex-col">
              {/* Article Featured Thumbnail slider */}
              <div>
                <h2 className="max-xl:text-2xl">
                  The best furniture comes from Lalasia
                </h2>
                <p className="max-w-lg 2xl:mt-7 2xl:mb-12 mt-4 mb-7">
                  Pellentesque etiam blandit in tincidunt at donec.
                </p>

                <div className="relative">
                  <Image className="w-full" src={featuredImage3} alt="" />

                  {/* TODO: INSERT LINEAR GRADIENT OVERLAY */}
                  <div></div>
                  <div className="absolute bottom-0 left-0 right-0 text-white p-6">
                    <div className="font-medium text-lg ">Tips and Trick</div>
                    <div className="font-bold header-3p 2xl:mt-3 2xl:mb-2 mt-2 mb-2">
                      Create Cozy Dining Room Vibes
                    </div>
                    <div className="paragraph-3 truncate text-screen-line mb-3">
                      Decorating with neutrals brings balance to the dining
                      room. With eclectic decoration on the sides, Caruso Dining
                      Table and Cyrillo Dining Chairs elevate the tonal base of
                      the room. The modern furniture set gives personality to
                      any space in all types of architecture.‎ The wide volume
                      enables everyone to sit back and relax, be it in the
                      dining room, conference, or office.
                    </div>
                    <Link
                      href={"#"}
                      className="font-medium text-lg hover:text-primary-100"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                {/* Slider Controls */}
                <div className="-translate-y-1/2 float-right">
                  {/* Prev Button */}
                  <button className="bg-white p-5">
                    <Image src={arrowLeftIcon} alt="" />
                  </button>
                  {/* Next Button */}
                  <button className="bg-primary p-5 hover:">
                    <Image src={arrowRightIcon} alt="" />
                  </button>
                </div>
              </div>

              <div className="space-y-5 2xl:space-y-4">
                {articles.map((article) => (
                  <ArticleThumbnail
                    key={`${article.author}-${article.title}`}
                    {...article}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="xl:mt-44 mt-24">
          <div className="container flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between">
            <h2 className="max-xl:text-2xl">
              Join with me to get special discount
            </h2>
            <div>
              <button className="btn btn-primary flex items-center">
                <div>Learn More </div>
                <Image className="inline ml-3" src={arrowRightIcon} alt="" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
