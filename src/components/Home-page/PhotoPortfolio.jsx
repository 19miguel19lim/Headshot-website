import { Link } from "react-router-dom";
import { data } from "../utils/contstant";

function PhotoPortfolio() {
  return (
    <div className="flex flex-col relative  mx-auto py-12 pb-24  space-y-12 ">
      <h1 className="text-4xl font-black text-center uppercase z-10">
        Our Portfolio
      </h1>
      <div className="grid grid-cols-2 gap-4 px-4 lg:grid-cols-3 md:max-w-4xl lg:max-w-7xl mx-auto">
        {data.map((curr, i) => {
          return (
            <figure key={i} className="overflow-hidden rounded-3xl">
              <img
                src={curr.image}
                alt=""
                className="hover:scale-110 duration-300 "
              />
            </figure>
          );
        })}
      </div>
      <div className="py-4 px-12 rounded-lg bg-black text-white max-w-[15rem] mx-auto text-center  hover:bg-lightBlue cursor-pointer duration-300 hover:text-black font-bold">
        <Link to="./portfolio">Explore Works</Link>
      </div>
    </div>
  );
}

export default PhotoPortfolio;
