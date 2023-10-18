import ProcessSteps from "./ProcessSteps";
import { motion } from "framer-motion";

function Process() {
  const male = "assets/male-img1.jpg";
  const female1 = "assets/female-img1.jpg";
  const female2 = "assets/female-img2.jpg";

  const imgMovements = {
    moveX: {
      x: [
        0, -100, 0, -100, 0, -100, 0, 0, -100, 0, -100, 0, -100, 0, 0, -100, 0,
        -100, 0, -100, 0, 0, -100, 0, -100, 0, -100, 0, 0, -100, 0, -100, 0,
        -100, 0, 0, -100, 0, -100, 0, -100, 0, 0, -100, 0, -100, 0, -100, 0, 0,
        -100, 0, -100, 0, -100, 0, 0, -100, 0, -100, 0, -100, 0,
      ],
      transition: { duration: 400, yoyo: Infinity },
    },
    moveY: {
      y: [
        0, -100, 0, -100, 0, -100, 0, 0, -100, 0, -100, 0, -100, 0, 0, -100, 0,
        -100, 0, -100, 0, 0, -100, 0, -100, 0, -100, 0, 0, -100, 0, -100, 0,
        -100, 0, 0, -100, 0, -100, 0, -100, 0, 0, -100, 0, -100, 0, -100, 0, 0,
        -100, 0, -100, 0, -100, 0, 0, -100, 0, -100, 0, -100, 0,
      ],
      transition: { duration: 400, yoyo: Infinity },
    },
  };

  return (
    <div className="flex flex-col relative  mx-auto py-12 pb-44   space-y-12 overflowX-hidden ">
      <h1 className="text-4xl font-black text-center uppercase z-10 lg:text-7xl">
        the process
      </h1>
      {/* floating images TODO!!!! */}

      <div className=" max-w-7xl h-screen w-screen  relative  mx-auto min-w-4xl overflowX-hidden ">
        <h1 className="px-44 md:px-[22rem] lg:px-[30rem]">.</h1>

        <motion.div
          variants={imgMovements}
          // initial="from"
          animate="moveX"
          className="hidden md:block absolute right-44"
        >
          <img src={male} alt="" className=" w-[30rem] rounded-full" />
        </motion.div>
        <motion.div
          variants={imgMovements}
          animate="moveX"
          className="absolute left-24 top-[50rem]"
        >
          <img
            src={male}
            alt=""
            className="lg:w-[22rem] xl:w-[25rem] rounded-full"
          />
        </motion.div>
        <motion.div
          variants={imgMovements}
          animate="moveX"
          className=" absolute right-30 top-4"
        >
          <img src={female2} alt="" className=" w-60 rounded-full" />
        </motion.div>
        <motion.div
          variants={imgMovements}
          animate="moveY"
          className="hidden md:block absolute right-80 top-20"
        >
          <img src={female1} alt="" className=" w-20 rounded-full" />
        </motion.div>
        <motion.div
          variants={imgMovements}
          animate="moveY"
          className=" absolute right-[5rem] top-[40rem]"
        >
          <img
            src={female1}
            alt=""
            className="lg:w-[18rem] xl:w-[30rem] rounded-full"
          />
        </motion.div>
        <motion.div
          variants={imgMovements}
          animate="moveY"
          className="hidden md:block absolute right-[35rem] top-[18rem]"
        >
          <img src={female2} alt="" className=" w-[15rem] rounded-full" />
        </motion.div>
      </div>

      {/* 3-steps */}
      <ProcessSteps />
    </div>
  );
}

export default Process;
