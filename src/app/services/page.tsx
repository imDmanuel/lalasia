import Image from "next/image";
import heroImage from "@/assets/images/services-hero-image.png";
import featuredImage1 from "@/assets/images/service-featured-1.png";
import featuredImage2 from "@/assets/images/service-featured-2.png";
import featuredImage3 from "@/assets/images/service-featured-3.png";
import arrowRightIcon from "@/assets/images/arrow-right-icon.svg";
import Link from "next/link";

const ServicesPage: React.FC = function () {
  return (
    <>
      <header className="xl:mt-24 mt-12">
        <div className="container">
          <h1 className="text-center max-2xl:text-2xl">Services</h1>

          <p className="mt-5 mb-12 max-w-lg mx-auto text-center">
            The product crafted by talented crafter and using high quality
            material with love inside
          </p>

          <Image className="w-full" src={heroImage} alt="" />
        </div>
      </header>
      <main>
        <section className="mt-24">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
              <ServiceItem
                index="01"
                name="Furniture"
                description="At the ultimate smart home, you're met with technology before you even step through the front door. "
              />
              <ServiceItem
                index="02"
                name="Home Decoration"
                description="Create A Calming Summer Escape With Our Luxurious Home Accessories For The Balmy Evenings."
              />
              <ServiceItem
                index="03"
                name="Kitchen Cabinet"
                description="Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets. "
              />
              <ServiceItem
                index="04"
                name="Interior Design"
                description="Innovative products often feature innovative designs that play with the patterns we are familiar."
              />
              <ServiceItem
                index="05"
                name="Exterior Design"
                description="These stylish and resilient products provide up-to-date options for roofing, siding, decking, and outdoor spaces."
              />
              <ServiceItem
                index="06"
                name="Custom Furniture"
                description="With Quality Materials and Modern Designs, we have Designs for all Tastes. we bring you World Class Designs."
              />
            </div>
          </div>
        </section>

        <section className="mt-12 2xl:mt-44">
          <div className="container">
            <div className="text-lg font-bold text-secondary">Portofolio</div>
            <div className="flex flex-col 2xl:flex-row justify-between 2xl:gap-10 mt-2 mb-4 2xl:mb-12">
              <h2 className="max-w-lg max-2xl:text-2xl">
                Amazing project we’ve done before
              </h2>

              <div className="max-w-lg">
                <p className="mb-5 max-2xl:text-sm">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non.
                </p>
                <Link
                  className="text-primary font-bold text-sm 2xl:text-lg"
                  href={"#"}
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-[4.174fr,5.826fr] grid-rows-2 gap-7">
              <div className="row-span-2 relative">
                {/* TODO: CHANGE IMAGE IN SMALLER SCREEN SIZES, THAT BRINGS OUT MORE DETAILS */}
                <Image
                  className="w-full h-full object-cover"
                  src={featuredImage1}
                  alt=""
                />
                <div className="absolute bottom-0 right-0 left-0 px-5 2xl:px-7 pb-5 2xl:pb-7 max-w-md">
                  <h3 className="text-white max-2xl:text-sm">
                    Siska Kohl’s Bedroom
                  </h3>
                  <p className="text-white truncate mt-1 mb-3">
                    We start renovating her bedroom with minimalist concept and
                    using combination white and wooden material
                  </p>
                  <Link className="text-white" href={"#"}>
                    See Detail
                  </Link>
                </div>
              </div>
              <div className="relative">
                {/* TODO: ADD IMAGE GRADIENT OVERLAY */}
                <Image className="w-full h-full" src={featuredImage2} alt="" />
                <div className="absolute bottom-0 right-0 left-0 px-5 2xl:px-7 pb-5 2xl:pb-7 pt-40 max-w-md">
                  <h3 className="text-white max-2xl:text-sm">
                    Jeruk Veldevana Living Room Design
                  </h3>
                  <p className="text-white truncate mt-1 mb-3">
                    We start renovating her bedroom with minimalist concept and
                    using combination white and wooden material
                  </p>
                  <Link className="text-white" href={"#"}>
                    See Detail
                  </Link>
                </div>
              </div>
              <div className="relative">
                {/* TODO: ADD IMAGE GRADIENT OVERLAY */}
                <Image className="w-full h-full" src={featuredImage3} alt="" />
                <div className="absolute bottom-0 right-0 left-0 px-5 2xl:px-7 pb-5 2xl:pb-7 pt-40 max-w-md">
                  <h3 className="text-white max-2xl:text-sm">
                    Cozy Co-working space
                  </h3>
                  <p className="text-white truncate mt-1 mb-3">
                    We start renovating her bedroom with minimalist concept and
                    using combination white and wooden material
                  </p>
                  <Link className="text-white" href={"#"}>
                    See Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 2xl:mt-44 mb-12 2xl:mb-20">
          <div className="container flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between">
            <h2 className="max-w-[30rem] max-2xl:text-2xl">
              Are you interested in working with us?
            </h2>

            <div>
              <button className="btn btn-primary flex items-center gap-3 min-w-fit">
                <div>Let&apos;s Talk</div>
                <Image src={arrowRightIcon} alt="" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const ServiceItem: React.FC<{
  index: string;
  name: string;
  description: string;
}> = function ({ index, name, description }) {
  return (
    <div>
      <div className="text-3xl 2xl:text-[4rem] text-primary">{index}</div>
      <div className="header-3 max-2xl:text-sm">{name}</div>
      <p className="max-xl:text-xs">{description}</p>
    </div>
  );
};

export default ServicesPage;
