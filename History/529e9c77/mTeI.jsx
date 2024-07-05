import { motion } from "framer-motion";
import icon1 from "../../assets/icon_1.png";
import icon2 from "../../assets/icon_2.png";
import icon3 from "../../assets/icon_3.png";
import icon4 from "../../assets/icon_4.png";
const WhyChoose = () => {
  return (
    <motion.div
      className="mt-20  max-w-[1280px] mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold">
        Why Choose <span className="border-b-4 border-[#FC6075]">SmartHR</span>
      </h2>
      <p className="w-1/2 mt-8">
        Looking to automate HR management template? SmartHR is for you. This is
        a project management and HR automation template that can be used for the
        HRMS system.
      </p>
      <div className="mt-14 grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        <div className="border-2 max-w-[350px] rounded-2xl  p-8">
          <img src={icon1} alt="" />
          <h3 className="text-3xl font-bold text--black mt-10 mb-4">
            Advanced Features
          </h3>
          <p className="text-xl">
            Advanced features tools like graphs, charts, invoices, video & audio
            calls, projects, etc.
          </p>
        </div>
        <div className="border-2 max-w-[350px] rounded-2xl  p-8">
          <img src={icon2} alt="" />
          <h3 className="text-3xl font-bold text--black mt-10 mb-4">
            More Flexible
          </h3>
          <p className="text-xl">
            Advanced features tools like graphs, charts, invoices, video & audio
            calls, projects, etc.
          </p>
        </div>
        <div className="border-2 max-w-[350px] rounded-2xl  p-8">
          <img src={icon3} alt="" />
          <h3 className="text-3xl font-bold text--black mt-10 mb-4">
            Retina Ready
          </h3>
          <p className="text-xl">
            Advanced features tools like graphs, charts, invoices, video & audio
            calls, projects, etc.
          </p>
        </div>
        <div className="border-2 max-w-[350px] rounded-2xl  p-8">
          <img src={icon4} alt="" />
          <h3 className="text-3xl font-bold text--black mt-10 mb-4">
            Clean Codes
          </h3>
          <p className="text-xl">
            Advanced features tools like graphs, charts, invoices, video & audio
            calls, projects, etc.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChoose;
