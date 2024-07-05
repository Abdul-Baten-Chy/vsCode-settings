import heroImg from "../assets/heroImg-ai.png";
const Hero = () => {
  return (
    <div className="max-h-[100vh] bg-[#B3E7DB] flex justify-center items-center ">
      <div className="flex-1">
        <h1 className="text-5xl uppercase pl-10">
          The Best Online Baby Toy Shop in Bangladesh for an affordable price &
          quality.
        </h1>
        <p className="pl-10">
          Find the best quality toys from Kiddyland online toy shop, the best
          toy shop in Bangladesh (BD) for affordable prices. In our store, you
          will find the following categories of toys: cars, pop it toys, action
          figures, toy guns, trains, helicopters, soft toys, dino toys, toy
          kitchens, baby toys, makeup toys, etc.
        </p>
      </div>
      <div className="flex-1">
        <img className="w-4/5 block mx-auto" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
