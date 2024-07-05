import img from "../assets/img2.jpg";
const About = () => {
  return (
    <div className="max-h-[100vh]">
      <div className="flex    mt-20">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="w-1/2  bg-[#EDF7FB] p-10 flex flex-col justify-center">
          <p className="text-3xl w-40 tracking-wider mb-5 text-[#36D6A8]">
            WHO WE ARE
          </p>
          <div className="w-5 h-1 bg-[#36D6A8] mb-5"></div>

          <p className="text-[18px] leading-6  max-w-[700px] text-justify">
            Welcome to ShareFood, a compassionate initiative committed to
            bridging the gap between surplus food and those in need. At our
            core, we believe in the transformative power of sharing, where a
            simple act can create a significant impact in the lives of the less
            fortunate. At ShareFood, we are more than just a platform we are a
            community driven by empathy and a shared vision for a world without
            hunger. Our mission is to harness the abundance of surplus food and
            redirect it towards those who need it the most. We understand the
            immense potential of every meal to not only satiate hunger but also
            to inspire hope and build a brighter future.
          </p>
        </div>
      </div>
      <div className="flex ">
        <div className="w-1/2  bg-[#f8e1df] p-10 flex flex-col justify-center">
          <p className="text-3xl w-40 tracking-wider mb-5 text-[#36D6A8]">
            WHO WE ARE
          </p>
          <div className="w-5 h-1 bg-[#36D6A8] mb-5"></div>

          <p className="text-[18px] leading-6  max-w-[700px] text-justify">
            Welcome to ShareFood, a compassionate initiative committed to
            bridging the gap between surplus food and those in need. At our
            core, we believe in the transformative power of sharing, where a
            simple act can create a significant impact in the lives of the less
            fortunate. At ShareFood, we are more than just a platform we are a
            community driven by empathy and a shared vision for a world without
            hunger. Our mission is to harness the abundance of surplus food and
            redirect it towards those who need it the most. We understand the
            immense potential of every meal to not only satiate hunger but also
            to inspire hope and build a brighter future.
          </p>
        </div>
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
