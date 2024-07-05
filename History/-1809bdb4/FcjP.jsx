import heroImg from "../assets/heroImg-ai.png";
const Hero = () => {
  return (
    <div className="max-h-[100vh] bg-[#B3E7DB] flex justify-center items-center ">
      <div className="flex-1">
        <h1 className="text-5xl uppercase pl-10">
          The Best Online Baby Toy Shop in Bangladesh for an affordable price &
          quality.
        </h1>
      </div>
      <div className="flex-1">
        <img className="w-4/5 block mx-auto" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
