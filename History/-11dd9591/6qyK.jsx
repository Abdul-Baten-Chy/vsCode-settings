import laptop from "../../assets/laptop.png";
const Header = () => {
  return (
    <div className=" bg-[#FDF3F4]  bg-gradient-to-r from-[#f5dfe1] to-[#FDF4F5]">
      <div className="max-h-[60%] max-w-[1280px]  mx-auto md:px-[16px]">
        <div>
          <h2 className="text-5xl leading-normal">
            <span className="text-5xl font-bold text-[#333333]">
              The Processes more
            </span>{" "}
            <br /> important from{" "}
            <span className="textt[#FF9B44] border-b-4 border-[#FC6075]">
              SmartHR
            </span>{" "}
            <br /> Here!
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
