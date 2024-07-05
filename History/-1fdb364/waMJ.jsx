import { useEffect, useState } from "react";

const News = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/v2/top-headlines")
      .then((res) => res.json())
      .then((data) => setData(data.articles));
  }, []);
  console.log(data);
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
      {data.map((item) => (
        <>
          <div className="col-span-12 md:col-span-6">
            <a href="">
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                {item.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">{item.description}</p>
            <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
          </div>

          <div className="col-span-12 md:col-span-6">
            <img className="w-full" src="./assets/thumb.png" alt="thumb" />
          </div>
        </>
      ))}
    </div>
  );
};

export default News;
