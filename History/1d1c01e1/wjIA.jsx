import video from "../../assets/video.mp4";
const About = () => {
  return (
    <div className="flex mt-28 gap-10 max-w-[1280px] mx-auto px-14">
      <div className="flex-1 bg-[#FFF6F7] p-10 rounded-3xl">
        <h3 className="font-bold text-xl">Who We Are </h3>
        <h2 className="text-4xl font-bold mt-6 mb-24">
          Empower Your Workforce, <br />
          Elevate Your Success
        </h2>
        <p>
          At our core, we believe that the success of any organization lies in
          the strength and efficiency of its workforce. Thats why we have
          created an innovative employee management app designed to streamline
          your HR processes and unleash the full potential of your team. From
          simplifying employee onboarding and performance evaluations to
          facilitating seamless communication and fostering a culture of
          collaboration, our platform empowers you to focus on what matters
          most—building a thriving and engaged workforce. With powerful features
          and intuitive interfaces, we are dedicated to revolutionizing the way
          you manage your employees, so you can achieve unparalleled success in
          todays dynamic business landscape.
        </p>
      </div>
      <div className="flex-1 flex flex-col relative ">
        <div className="flex-1  relative ">
          <video
            src={video}
            className="object-cover w-full h-full overflow-hidden rounded-3xl"
            autoPlay
            muted
            loop
          ></video>
          <div className="w-full h-full bg-gradient-to-r from-[#FC6075] to-[#f6b0b9] opacity-0 hover:opacity-75 rounded-3xl  absolute top-0 left-0 z-20 transition duration-700 "></div>
        </div>
        <div className="flex-1 grid grid-cols-2 bg-[#f8d2d7] mt-10 rounded-3xl">
          <div className="bg-white">
            <h3>3.5 </h3>
            <p>Years Experiance</p>
          </div>
          <div className="bg-white">
            <h3>3.5 </h3>
            <p>Years Experiance</p>
          </div>
          <div className="bg-white">
            <h3>3.5 </h3>
            <p>Years Experiance</p>
          </div>
          <div className="bg-white">
            <h3>3.5 </h3>
            <p>Years Experiance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
