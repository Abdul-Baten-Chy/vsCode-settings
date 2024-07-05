import heroImg from "../assets/heroImg-ai.png";
const Hero = () => {
  return (
    <div className="max-h-[100vh] bg-[#B3E7DB] flex ">
      <div>
        <h1 className="text-6xl">
          The Best Online Baby Toy Shop in Bangladesh (BD) for an affordable
          price & quality.
        </h1>
      </div>
      <div>
        <img className="w-full" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
