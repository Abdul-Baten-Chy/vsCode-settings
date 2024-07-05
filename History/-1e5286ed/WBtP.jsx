import { motion } from "framer-motion";
import laptop from "../../assets/laptop.png";
const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#f6edee] to-[#FDF4F5]">
      <div className="max-w-[1280px] flex gap-8 items-center justify-center mx-auto md:px-[16px]">
        <motion.div
          className="flex-1 "
          initial={{ opacity: 0, x: -300 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
        >
          <h2 className="text-5xl leading-snug">
            <span className="text-5xl font-bold text-[#333333]">
              The Processes more
            </span>{" "}
            <br /> important from{" "}
            <span className="textt[#FF9B44] border-b-4 border-[#FC6075] text-[#FF9B44] font-bold">
              SmartHR
            </span>{" "}
            <br /> Here!
          </h2>
          <p className="text-xl text-black italic mb-4 mt-10 ">
            Get started for free
          </p>
          <input
            type="text"
            placeholder="Enter your email here"
            className="w-1/2 h-[50px] px-4 py-1 rounded-full"
          />
          <button className="bg-[#FC6075] hover:bg-[#FF9B44] transition duration-500 h-[50px] px-4 ml-4 font-bold text-white py-1 rounded-full">
            GET STARTED
          </button>
        </motion.div>
        <motion.div
          className="flex-1 "
          initial={{ opacity: 0, x: 300 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
        >
          <img src={laptop} alt="" className="-mb-16 mt-40" />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
