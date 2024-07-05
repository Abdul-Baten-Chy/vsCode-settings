import laptop from "../../assets/laptop.png";
const Header = () => {
  return (
    <div className="max-h-[60%] max-w-[1280px] mx-auto mx-auto md:px-[16px] bg-[#FDF3F4]">
      <div></div>
      <div>
        <img src={laptop} alt="" />
      </div>
    </div>
  );
};

export default Header;
