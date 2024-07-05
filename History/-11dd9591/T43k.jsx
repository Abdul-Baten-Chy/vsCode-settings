import laptop from "../../assets/laptop.png";
const Header = () => {
  return (
    <div className=" bg-[#FDF3F4]  bg-gradient-to-r from-[#f5dfe1] to-[#FDF4F5]">
      <div className="max-h-[60%] max-w-[1280px]  mx-auto md:px-[16px]">
        <div>
          <h2 className="text-5xl">
            The Processes more <br /> important from SmartHR <br /> Here!
          </h2>
        </div>
        <div>
          <img src={laptop} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
