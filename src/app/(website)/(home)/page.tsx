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
import Link from "next/link";
import arrowLeftIcon from "@/assets/images/arrow-left-icon.svg";
import arrowRightIcon from "@/assets/images/arrow-right-icon.svg";
import { ArticleThumbnail } from "./ArticleThumbnail";
import { BenefitCard } from "./BenefitCard";
import { SearchProperty } from "@/components/SearchProperty";
import { Testimonials } from "./Testimonials";
import { groq } from "next-sanity";
import { getClient } from "../../../../sanity/lib/client";
import { IArticleThumbnail, IProduct } from "@/types";

const productsQuery = groq`*[_type=="products"]{
  _id, name, image, overview, detail, price,
  "category": category->name

}
`;

const articlesQuery = groq`*[_type=="article"]{
  title, excerpt, createdAt, coverImage,
  categories[]->,
  author->
}`;

const client = getClient();

export default async function Home() {
  // FETCH POSTS FROM SANITY
  let products: IProduct[] = [];
  let articles: IArticleThumbnail[] = [];
  try {
    products = await client.fetch<IProduct[]>(productsQuery);
  } catch (e) {
    // TODO: SHOW TOAST ERROR MESSAGE
  }
  try {
    articles = await client.fetch<IArticleThumbnail[]>(articlesQuery);
  } catch (e) {
    // TODO: SHOW TOAST ERROR MESSAGE
  }

  return (
    <>
      <header>
        <div className="container mt-12 text-center 2xl:mt-24">
          <div className="relative">
            <h1 className="max-2xl:header-3p mx-auto max-w-3xl max-2xl:max-w-xs">
              Discover Furniture With High Quality Wood
            </h1>
            <p className="paragraph-3 max-2xl:paragraph-1 mx-auto mt-8 max-w-3xl">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non. Purus parturient
              viverra nunc, tortor sit laoreet. Quam tincidunt aliquam
              adipiscing tempor.
            </p>
            <Image
              src={headerCurlyImage}
              alt=""
              className="absolute bottom-0 left-0 max-2xl:top-0 max-2xl:w-10 sm:left-12 2xl:left-24"
            />
          </div>
          <div className="relative mt-20">
            <div className="mx-auto w-full max-w-3xl 2xl:absolute 2xl:left-1/2 2xl:top-0 2xl:-translate-x-1/2 2xl:-translate-y-1/2">
              <SearchProperty buttonText="Search" />
            </div>
            <Image className="w-full" src={heroImage} alt="" />
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="text-lg font-bold text-secondary max-2xl:text-sm">
              Benefits
            </div>
            <div className="mt-3 flex justify-between space-x-52 max-2xl:mt-2 max-2xl:flex-col max-2xl:space-x-0 max-2xl:space-y-4 ">
              <h2 className="max-2xl:header-3 max-w-md ">
                Benefits when using our services
              </h2>

              <p className="max-lg:paragraph-1 max-w-lg">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
              </p>
            </div>

            {/* Benefit card list */}
            <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="text-center text-sm font-bold text-secondary 2xl:text-lg">
            Product
          </div>
          <h2 className="mb-4 mt-2 text-center max-2xl:text-2xl 2xl:mb-7 2xl:mt-3">
            Our popular product{" "}
          </h2>
          <p className="paragraph-1 2xl:paragraph-3 mx-auto mb-7 max-w-2xl text-center 2xl:mb-12">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>

          {/* TODO: Replace loading text with skeleton */}
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList products={products} />
          </Suspense>
        </section>

        <section className="mt-24 2xl:mt-44">
          <div className="container">
            <div className="mb-2 text-sm font-bold text-secondary 2xl:mb-3 2xl:text-lg">
              Our Product
            </div>
            <div className="flex flex-col gap-7 sm:flex-row 2xl:gap-16">
              <div className="w-full sm:w-1/2">
                <h2 className="max-2xl:header-3 max-w-lg">
                  Crafted by talented and high quality material
                </h2>

                <p className="max-xl:paragraph-1 mb-7 mt-4 2xl:my-12">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non purus
                  parturient. morbi fermentum, vivamus et accumsan dui tincidunt
                  pulvinar
                </p>

                <button className="btn btn-primary max-sm:w-full">
                  Learn More
                </button>

                <Image src={featuredImage1} alt="" className="mt-5 2xl:mt-12" />
              </div>
              <div className="w-full sm:w-1/2">
                {/* Stats */}
                <div className="flex gap-5 max-2xl:justify-between 2xl:ml-auto 2xl:gap-12">
                  <div>
                    <div className="text-[1.375rem] font-bold text-title 2xl:text-5xl">
                      20+
                    </div>
                    <p className="max-2xl:paragraph-1 mt-3 text-lg font-medium">
                      Years of Experience
                    </p>
                  </div>
                  <div>
                    <div className="text-[1.375rem] font-bold text-title 2xl:text-5xl">
                      483
                    </div>
                    <p className="max-2xl:paragraph-1 mt-3 text-lg font-medium">
                      Happy Client
                    </p>
                  </div>
                  <div>
                    <div className="text-[1.375rem] font-bold text-title 2xl:text-5xl">
                      150+
                    </div>
                    <p className="max-2xl:paragraph-1 mt-3 text-lg font-medium">
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
            <div className="mb-3 text-center text-lg font-bold text-secondary">
              Testimonials
            </div>
            <h2 className="text-center">What our customer say</h2>
            <p className="mx-auto mb-7 mt-4 max-w-2xl text-center 2xl:mb-12 2xl:mt-7">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>

          {/* FIXME: FIX RESPONSIVENESS ON SMALLER SCREENS */}
          <Testimonials />
        </section>

        {/* ARTICLES THUMBNAILS */}
        <section className="mt-24 2xl:mt-44">
          <div className="container">
            <div className=":text-sm mb-3 font-bold text-secondary 2xl:text-lg">
              Articles
            </div>
            <div className="flex gap-12 max-2xl:flex-col">
              {/* Article Featured Thumbnail slider */}
              <div>
                <h2 className="max-xl:text-2xl">
                  The best furniture comes from Lalasia
                </h2>
                <p className="mb-7 mt-4 max-w-lg 2xl:mb-12 2xl:mt-7">
                  Pellentesque etiam blandit in tincidunt at donec.
                </p>

                <div className="relative">
                  <Image className="w-full" src={featuredImage3} alt="" />

                  {/* TODO: INSERT LINEAR GRADIENT OVERLAY */}
                  <div className="bg-gradient-overlay absolute inset-0"></div>
                  {/* TODO: CHANGE TO SLIDE GALLERY */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-lg font-medium ">Tips and Trick</div>
                    <div className="header-3p mb-2 mt-2 font-bold 2xl:mb-2 2xl:mt-3">
                      Create Cozy Dining Room Vibes
                    </div>
                    <div className="paragraph-3 mb-3 truncate text-screen-line">
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
                      className="hover:text-primary-100 text-lg font-medium"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                {/* Slider Controls */}
                <div className="float-right -translate-y-1/2">
                  {/* Prev Button */}
                  <button className="bg-white p-5">
                    <Image src={arrowLeftIcon} alt="" />
                  </button>
                  {/* Next Button */}
                  <button className="hover: bg-primary p-5">
                    <Image src={arrowRightIcon} alt="" />
                  </button>
                </div>
              </div>

              <div className="space-y-5 2xl:space-y-4">
                {articles?.map((article) => (
                  <ArticleThumbnail
                    key={`${article.author.name}-${article.title}`}
                    {...article}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="mt-24 xl:mt-44">
          <div className="container flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
            <h2 className="max-xl:text-2xl">
              Join with me to get special discount
            </h2>
            <div>
              <button className="btn btn-primary flex items-center">
                <div>Learn More </div>
                <Image className="ml-3 inline" src={arrowRightIcon} alt="" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
