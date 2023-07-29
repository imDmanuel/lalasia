import Image from "next/image";
import { VideoPlayer } from "./VideoPlayer";
import callIcon from "@/assets/images/call-icon.svg";
import messageIcon from "@/assets/images/message-icon.svg";
import awardIcon from "@/assets/images/award-icon.svg";
import { teamMembers } from "@/mock-data";
import { TeamMember } from "./TeamMember";
import arrowRightIcon from "@/assets/images/arrow-right-icon.svg";

const AboutPage: React.FC = function () {
  return (
    <>
      <header className="xl:mt-24 mt-12">
        <div className="container">
          <h1 className="text-center max-xl:text-2xl">About Us</h1>
          <p className="text-center max-w-xl mx-auto mt-5 mb-7 xl:mb-12 max-xl:text-sm">
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item
          </p>

          <VideoPlayer />
        </div>
      </header>
      <main>
        <section className="mt-24 xl:mt-44">
          <div className="container">
            <h5 className="text-secondary max-xl:text-sm">Our Mission</h5>
            <div className="flex flex-col xl:flex-row max-xl:space-y-7 xl:space-x-24 ">
              <div className="max-w-lg">
                <h2 className="mt-3 mb-12 max-xl:text-2xl">
                  Our team dedicated to help find smart home product
                </h2>

                <div>
                  {/* Stats */}
                  <div className="flex gap-5 xl:gap-12 max-xl:justify-between xl:ml-auto">
                    <div>
                      <div className="font-bold xl:text-5xl text-title text-[1.375rem]">
                        20+
                      </div>
                      <p className="font-medium text-lg mt-3 max-xl:paragraph-1">
                        Years of Experience
                      </p>
                    </div>
                    <div>
                      <div className="font-bold xl:text-5xl text-title text-[1.375rem]">
                        483
                      </div>
                      <p className="font-medium text-lg mt-3 max-xl:paragraph-1">
                        Happy Client
                      </p>
                    </div>
                    <div>
                      <div className="font-bold xl:text-5xl text-title text-[1.375rem]">
                        150+
                      </div>
                      <p className="font-medium text-lg mt-3 max-xl:paragraph-1">
                        Projects Finished
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-7 w-full xl:w-1/2 max-w-xl">
                <div className="flex space-x-7 xl:space-x-6">
                  <div>
                    <div className="w-11 xl:w-16 h-11 xl:h-16 aspect-square grid place-items-center bg-placeholder rounded-full">
                      <Image src={callIcon} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl">24/7 Support</div>
                    <p className="mt-4">
                      24/7 support means a support service that is provided 24
                      hours a day and 7 days a week.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-7 xl:space-x-6">
                  <div>
                    <div className="w-11 xl:w-16 h-11 xl:h-16 aspect-square grid place-items-center bg-placeholder rounded-full">
                      <Image src={messageIcon} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl">Free Consultation</div>
                    <p className="mt-4">
                      A free consultation is a one-on-one interaction or
                      conversation given freely to share one&apos;s thoughts and
                      discuss possible
                    </p>
                  </div>
                </div>
                <div className="flex space-x-7 xl:space-x-6">
                  <div>
                    <div className="w-11 xl:w-16 h-11 xl:h-16 aspect-square grid place-items-center bg-placeholder rounded-full">
                      <Image src={awardIcon} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl">Overall Guarantee</div>
                    <p className="mt-4">
                      The comprehensive guarantee is required for import,
                      warehousing, transit, processing and specific use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM MEMBERS */}
        <section className="mt-24 xl:mt-44">
          <div className="container">
            <h5 className="text-secondary max-xl:text-sm">Our Team</h5>
            <div className="flex flex-col xl:flex-row xl:space-x-44 max-xl:space-y-4 mt-3 mb-12">
              <div>
                <h2 className="max-xl:text-2xl xl:max-w-lg">
                  Meet our leading and strong team
                </h2>
              </div>

              <p className="max-xl:text-sm xl:max-w-lg">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {teamMembers.map((teamMember) => (
                <TeamMember key={teamMember.name} {...teamMember} />
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="xl:mt-44 mt-24">
          <div className="container flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between">
            <h2 className="max-xl:text-2xl">
              Are you interested work with us?
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

export default AboutPage;
