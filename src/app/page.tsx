import Image from "next/image";
import headerCurlyImage from "@/assets/images/header-curly-image.svg";
import heroBg from "@/assets/images/hero-bg.png";
import searchIcon from "@/assets/images/search-icon.svg";
import benefitIcon1 from "@/assets/images/benefit-card-icon-1.svg";
import benefitIcon2 from "@/assets/images/benefit-card-icon-2.svg";
import benefitIcon3 from "@/assets/images/benefit-card-icon-3.svg";
import { ProductList } from "@/components/ProductList";
import { Suspense } from "react";
import featuredImage1 from "@/assets/images/featured-image-1.png";
import featuredImage2 from "@/assets/images/featured-image-2.png";
import featuredImage3 from "@/assets/images/featured-image-3.png";
import { Testimonials } from "@/components/Testimonials";
import Link from "next/link";
import { faker } from "@faker-js/faker";
import { IArticleThumbnail } from "@/types";
import { articles } from "@/mock-data";
import arrowLeftIcon from "@/assets/images/arrow-left-icon.svg";
import arrowRightIcon from "@/assets/images/arrow-right-icon.svg";

export const Home = function () {
  return (
    <>
      <header>
        <div className="container text-center mt-24">
          <div className="relative">
            <h1 className="max-w-3xl mx-auto">
              Discover Furniture With High Quality Wood
            </h1>
            <p className="max-w-3xl mx-auto mt-8">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non. Purus parturient
              viverra nunc, tortor sit laoreet. Quam tincidunt aliquam
              adipiscing tempor.
            </p>
            <Image
              src={headerCurlyImage}
              alt=""
              className="absolute bottom-0 left-24 max-lg:hidden"
            />
          </div>
          <div className="relative mt-20">
            <div className="bg-white py-4 pr-4 pl-6 gap-4 flex justify-center shadow max-w-3xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 w-full -translate-y-1/2">
              <Image src={searchIcon} alt="" />
              <input
                type="text"
                placeholder="Search property"
                className="flex-1 outline-none"
              />
              <button className="btn btn-primary">Search</button>
            </div>
            <Image src={heroBg} alt="" />
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="text-secondary-600 font-bold text-lg">Benefits</div>
            <div className="flex justify-between mt-3">
              <h2 className="max-w-md">Benefits when using our services</h2>

              <p className="max-w-lg">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
              </p>
            </div>

            {/* Benefit card list */}
            <div className="grid grid-cols-3 gap-7 mt-12">
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

        <section className="mt-44">
          <div className="font-bold text-secondary-600 text-lg text-center">
            Product
          </div>
          <h2 className="mt-3 mb-7 text-center">Our popular product </h2>
          <p className="paragraph-3 max-w-2xl text-center mx-auto mt-7 mb-12">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>

          {/* TODO: Replace loading text with skeleton */}
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </Suspense>
        </section>

        <section className="mt-44">
          <div className="container">
            <div className="font-bold text-secondary-600 text-lg  mb-3">
              Our Product
            </div>
            <div className="flex gap-16">
              <div className="w-1/2">
                <h2 className="max-w-lg">
                  Crafted by talented and high quality material
                </h2>

                <p className="my-12">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non purus
                  parturient. morbi fermentum, vivamus et accumsan dui tincidunt
                  pulvinar
                </p>

                <button className="btn btn-primary">Learn More</button>

                <Image src={featuredImage1} alt="" />
              </div>
              <div className="w-1/2">
                {/* Stats */}
                <div className="flex gap-12 ml-auto">
                  <div>
                    <div className="font-bold text-5xl text-title-600">20+</div>
                    <p className="font-medium text-lg mt-3">
                      Years of Experience
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-5xl text-title-600">483</div>
                    <p className="font-medium text-lg mt-3">Happy Client</p>
                  </div>
                  <div>
                    <div className="font-bold text-5xl text-title-600">
                      150+
                    </div>
                    <p className="font-medium text-lg mt-3">
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
        <section className="mt-44">
          <div className="container">
            <div className="font-bold text-secondary-600 text-lg  mb-3 text-center">
              Our Product
            </div>
            <h2 className="text-center">What our customer say</h2>
            <p className="max-w-2xl mx-auto text-center mt-7 mb-12">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>

          <Testimonials />
        </section>

        {/* ARTICLES THUMBNAILS */}
        <section className="mt-44">
          <div className="container">
            <div className="font-bold text-secondary-600 text-lg  mb-3">
              Articles
            </div>
            <div className="flex gap-12">
              {/* Article Featured Thumbnail slider */}
              <div>
                <h2>The best furniture comes from Lalasia</h2>
                <p className="max-w-lg mt-7 mb-12">
                  Pellentesque etiam blandit in tincidunt at donec.
                </p>

                <div className="relative">
                  <Image className="w-full" src={featuredImage3} alt="" />

                  {/* TODO: INSERT LINEAR GRADIENT OVERLAY */}
                  <div></div>
                  <div className="absolute bottom-0 left-0 right-0 text-white p-6">
                    <div className="font-medium text-lg">Tips and Trick</div>
                    <div className="font-bold header-3p">
                      Create Cozy Dining Room Vibes
                    </div>
                    <div className="paragraph-3 truncate text-screen-line">
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
                  <button className="bg-primary-600 p-5 hover:">
                    <Image src={arrowRightIcon} alt="" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
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
        <section className="pt-44 pb-20">
          <div className="container flex justify-between">
            <h2>Join with me to get special discount</h2>
            <button className="btn btn-primary">
              Learn More{" "}
              <Image className="inline ml-3" src={arrowRightIcon} alt="" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

const BenefitCard: React.FC<{
  icon: React.ComponentProps<typeof Image>["src"];
  title: string;
  children: string;
}> = function ({ icon, title, children }) {
  return (
    <div className="shadow-lg p-6">
      {/* Card Icon */}
      <div className="bg-placeholder-600 p-4 rounded-full max-w-fit">
        <Image src={icon} alt="" />
      </div>
      {/* Card title */}
      <h3 className="mt-6 mb-5">{title}</h3>
      {/* Card content */}
      <p className="paragraph-3">{children}</p>
    </div>
  );
};

const ArticleThumbnail: React.FC<IArticleThumbnail> = function ({
  author,
  category,
  date,
  image,
  summary,
  title,
  authorImage,
}) {
  return (
    <div className="flex gap-3 items-center">
      <Image
        className="object-cover w-[260px] h-[260px]"
        src={image}
        alt=""
        width={260}
        height={260}
      />

      <div>
        <div className="paragraph-3 text-paragraph-600">{category}</div>
        <div className="header-3 text-title-600 mt-5 mb-3">{title}</div>
        <p className="paragraph-3">{summary}</p>
        <div className="flex space-x-2 items-center mt-4">
          <Image
            className="w-7 h-7 rounded-full object-cover"
            src={authorImage}
            alt=""
            width={28}
            height={28}
          />
          <div className="header-6p truncate">By {author}</div>
          <p className="min-w-fit self-end">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
