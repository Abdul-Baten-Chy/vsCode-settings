import Hero from "../Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="section-content">
        <div
          className="row equal-height-inner home-boxes"
          data-margin-top="-100px"
          style="margin-top: -100px;"
        >
          <div
            className="col-sm-12 col-md-3 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay1"
            style="min-height: 15.07em; visibility: visible;"
          >
            <div
              className="sm-height-auto bg-theme-colored"
              style="min-height: 210.98px;"
            >
              <div className="p-30">
                <h3 className="text-uppercase text-white mt-0">
                  Become a Volunteer
                </h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </p>
                <a
                  href="page-become-a-volunteer.html"
                  className="btn btn-border btn-circled btn-transparent btn-sm"
                >
                  Join us Now
                </a>
              </div>
              <i className="flaticon-charity-shaking-hands-inside-a-heart bg-icon"></i>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay2"
            style="min-height: 15.07em; visibility: visible;"
          >
            <div
              className="sm-height-auto bg-theme-colored-darker2"
              style="min-height: 210.98px;"
            >
              <div className="p-30">
                <h3 className="text-uppercase text-white mt-0">
                  Adopt a Child
                </h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </p>
                <a
                  href="#"
                  className="btn btn-border btn-circled btn-transparent btn-sm"
                >
                  Contact us
                </a>
              </div>
              <i className="flaticon-charity-home-insurance bg-icon"></i>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-3 pl-0 pr-0 pl-sm-15 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay3"
            style="min-height: 15.07em; visibility: visible;"
          >
            <div
              className="sm-height-auto bg-theme-colored-darker3"
              style="min-height: 210.98px;"
            >
              <div className="p-30">
                <h3 className="text-uppercase text-white mt-0">Get Involved</h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </p>
                <a
                  href="page-donate.html"
                  className="btn btn-border btn-circled btn-transparent btn-sm"
                >
                  Donate Us
                </a>
              </div>
              <i className="flaticon-charity-make-an-online-donation bg-icon"></i>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-3 pl-0 pl-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay4"
            style="min-height: 15.07em; visibility: visible;"
          >
            <div
              className="sm-height-auto bg-theme-colored-darker4"
              style="min-height: 210.98px;"
            >
              <div className="p-30">
                <h3 className="text-uppercase text-white mt-0">
                  Emergency Case
                </h3>
                <h2 className="text-white">+(012) 345 6789</h2>
                <a
                  href="page-contact1.html"
                  className="btn btn-border btn-circled btn-transparent btn-sm"
                >
                  Contact Now
                </a>
              </div>
              <i className="fa fa-mobile bg-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
