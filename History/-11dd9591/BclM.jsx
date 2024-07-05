import laptop from "../../assets/laptop.png";
const Header = () => {
  return (
    <div className=" bg-[#FDF3F4]">
      <div className="max-h-[60%] max-w-[1280px]  mx-auto md:px-[16px]">
        <div></div>
        <div>
          <img src={laptop} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
