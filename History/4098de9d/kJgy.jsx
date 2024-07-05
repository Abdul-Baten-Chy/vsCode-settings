const About = () => {
  return (
    <div className="hidden md:grid md:grid-cols-2 h-[620px] ">
      <div>
        <div className="relative mt-24 h-[620px] max-w--[360px]">
          <div className="w-52 h-52 bg-[#66eb8e] absolute "></div>
          <div className="w-52 h-52 md:hidden lg:block bg-[#26b1e9] lg:absolute top-72 left-[270px]"></div>
          <img
            src="https://i.ibb.co/vQS2g2F/cat-4-5.webp"
            alt=""
            className="h-[520px] absolute top-8 left-8 w-[400px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-h[300px]">
        <h2 className="font-head md:text-[30px] lg:text-[40px] font-extrabold mt-24 leading-10 mb-5 md:ml-10 lg:ml-2">
          Unique Experience
        </h2>
        <p className="mr-10 font-body text-[18px] md:ml-10 lg:ml-2">
          Mobile gadgets in generation shop can be found by brands, price range
          and so on. A blog section is also there to keep you informed about the
          latest news from the mobile phone industry. You may also check our
          where to buy page to get some idea about different buying
          possibilities.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
