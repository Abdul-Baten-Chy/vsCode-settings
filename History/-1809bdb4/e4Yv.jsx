import heroImg from "../assets/heroImg-ai.png";
const Hero = () => {
  return (
    <div className="max-h-[100vh] bg-[#B3E7DB] flex ">
      <div></div>
      <div>
        <img className="w-full" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
