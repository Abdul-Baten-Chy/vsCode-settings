import laptop from "../../assets/laptop.png";
const Header = () => {
  return (
    <div className=" bg-[#FDF3F4]  bg-gradient-to-r from-[#f5dfe1] to-[#FDF4F5]">
      <div className="max-w-[1280px] flex gap-8 items-center justify-center mx-auto md:px-[16px]">
        <div className="flex-1">
          <h2 className="text-5xl leading-snug">
            <span className="text-5xl font-bold text-[#333333]">
              The Processes more
            </span>{" "}
            <br /> important from{" "}
            <span className="textt[#FF9B44] border-b-4 border-[#FC6075]">
              SmartHR
            </span>{" "}
            <br /> Here!
          </h2>
          <p>Get started for free</p>
          <input
            type="text"
            className="w-2/3 h-[50px] px-2 py-1 rounded-full"
          />
          <button></button>
        </div>
        <div className="flex-1">
          <img src={laptop} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
