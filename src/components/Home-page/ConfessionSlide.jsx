import { motion } from "framer-motion";

function ConfessionSlide() {
  const data = [
    {
      name: "Jessica Thornton",
      position: "HR Manager, Thorn",
      image: "assets/portfolio-img1.png",
      display: true,
      comment:
        "We were holding an annual team offsite and wanted to make sure we got everyone photographed while we were in the same place. Nathan and his team were easy to work with and made this easy for everyone. Viewing the images instantly was also a huge plus and made things go by quickly.",
    },
    {
      name: "Sara Bridges",
      position: "Real Estate Broker, Redfin",
      image: "assets/portfolio-img2.png",
      display: false,
      comment:
        "Nathan is a ball of energy that brings the best out of people. He knew just how to get inside my head and make me feel relaxed in front of the camera witch literally never happens. Coming to the studio was simple and seeing the images right away it really easy.",
    },
    {
      name: "James Guntt",
      position: "Lead Designer, Apex",
      image: "assets/portfolio-img3.png",
      display: false,
      comment:
        "We were holding an annual team offsite and wanted to make sure we got everyone photographed while we were in the same place. Nathan and his team were easy to work with and made this easy for everyone. Viewing the images instantly was also a huge plus and made things go by quickly.",
    },
    {
      name: "Thomas Wayne",
      position: "Head Architect, Arch",
      image: "assets/portfolio-img4.png",
      display: false,
      comment:
        "We were holding an annual team offsite and wanted to make sure we got everyone photographed while we were in the same place. Nathan and his team were easy to work with and made this easy for everyone. Viewing the images instantly was also a huge plus and made things go by quickly.",
    },
    {
      name: "Donna Henny",
      position: "Real Estate Broker, Solid",
      image: "assets/portfolio-img5.png",
      display: false,
      comment:
        "We were holding an annual team offsite and wanted to make sure we got everyone photographed while we were in the same place. Nathan and his team were easy to work with and made this easy for everyone. Viewing the images instantly was also a huge plus and made things go by quickly.",
    },
    {
      name: "Michelle Michaels",
      position: "Software Engineer, Google",
      image: "assets/portfolio-img6.png",
      display: false,
      comment:
        "We were holding an annual team offsite and wanted to make sure we got everyone photographed while we were in the same place. Nathan and his team were easy to work with and made this easy for everyone. Viewing the images instantly was also a huge plus and made things go by quickly.",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto space-y-6 px-4  items-center justify-center relative  lg:max-w-7xl">
      <div className="flex space-x-6">
        {data.map((curr, i) => {
          return (
            <div
              key={i}
              className={
                curr.display
                  ? "flex flex-col relative items-center justify-center border-2 bg-gradient-to-t from-gray-700 via-gray-900 to-black rounded-3xl md:scale-150 lg:scale-100 lg:flex-row lg:py-44"
                  : "hidden"
              }
            >
              {/* imge */}
              <div className="relative ">
                <img
                  src={curr.image}
                  alt=""
                  className="rounded-2xl p-4 h-[26rem] min-w-[22rem] lg:scale-150 lg:mr-44 lg:h-[40rem] lg:w[35rem]"
                />
                <motion.button className="absolute top-[12rem] right-[9rem] scale-125 lg:top-[15rem] lg:right-[26rem] ">
                  <img src="assets/plauButton-blue.png" alt="" />
                </motion.button>
              </div>
              {/* content */}
              <div className="flex flex-col items-center justify-center space-y-2 py-8 -mt-20 text-white lg:items-start lg:space-y-6 lg:pr-12 relative">
                <div className="hidden lg:block max-w-xs">
                  <p>{curr.comment}</p>
                </div>
                <div className="w-16 h-16 bg-portBg1 bg-cover ring-4 ring-white rounded-full mb-4"></div>
                <h1 className="text-2xl font-black">{curr.name}</h1>
                <p>{curr.position}</p>
                <div className="hidden lg:block absolute -top-16 right-0 left-0">
                  <img src="assets/quote.png" alt="" className="scale-150" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ConfessionSlide;
