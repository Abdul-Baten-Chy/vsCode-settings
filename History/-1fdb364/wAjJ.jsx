import { useEffect, useState } from "react";

const News = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/v2/top-headlines")
      .then((res) => res.json())
      .then((d) => setData(d.articles));
  }, []);
  console.log(data);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        {/* repeat */}
        <div className="col-span-12 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                Cities have stopped being the engines of growth and opportunity
                they once were
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">
              The pandemic is dealing prodigious blows to cities across the
              country. But the world can’t hope to thrive again if its cities
              don’t—they’re the places that have historically supplied the keys
              for unlocking human potential. Though beset by racism and other
              injustices, cities not only provided shared, robust public
              infrastructure like schools, libraries and transit systems, they
              stirred together vast numbers of people from different cultures
              and classes.
            </p>
            <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <img className="w-full" src="./assets/thumb_lg.png" alt="thumb" />
            <p className="mt-5 text-base text-[#5C5955]">
              Illustration: Karolis Strautniekas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
