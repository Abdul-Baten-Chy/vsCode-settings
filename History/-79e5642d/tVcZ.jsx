import icon1 from "../../assets/icon_1.png";
const WhyChoose = () => {
  return (
    <div className="mt-20  max-w-[1280px] mx-auto">
      <h2 className="text-4xl font-bold">
        Why Choose <span className="border-b-4 border-[#FC6075]">SmartHR</span>
      </h2>
      <p className="w-1/2 mt-8">
        Looking to automate HR management template? SmartHR is for you. This is
        a project management and HR automation template that can be used for the
        HRMS system.
      </p>
      <div>
        <div className="border-2 max-w-[350px] p-8">
          <img src={icon1} alt="" />
          <h3 className="text-3xl font-bold text--black">Advanced Features</h3>
          <p>
            Advanced features tools like graphs, charts, invoices, video & audio
            call's, projects, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
