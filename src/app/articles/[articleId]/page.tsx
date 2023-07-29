import Image from "next/image";
// import heroImage from "/assets/images/article-detail/"

const ArticleDetail: React.FC = function () {
  return (
    <>
      <header className="mt-24 xl:mt-44">
        <div className="container text-center">
          <h1>
            Bedroom Design is the Most Personal Reflection of the Owner, Really?
          </h1>
          <p>
            Is it true that the bedroom design is the most personal reflection
            of the owner? Many people believe that to be able to judge a
            person&apos;s personality, it is enough to
          </p>

          {/* <Image src={"/assets/images/"} alt="" width={1240} height={550} /> */}
        </div>
      </header>
      <main></main>
    </>
  );
};

export default ArticleDetail;
