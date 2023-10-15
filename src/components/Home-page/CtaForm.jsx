import { useState } from "react";
import { BreakPoints } from "../utils/BreakPoints";

function CtaForm() {
  const [currentQuestion, SetCurrentQuestion] = useState(0);

  const windowSize = BreakPoints();
  const lgScreen = windowSize.width <= 1024;

  const handleClick = () => {
    if (currentQuestion < questions.length - 1) {
      SetCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      SetCurrentQuestion(currentQuestion - 1);
    }
  };

  const questions = [
    {
      key: 1,
      question: "what type of headshots are you looking for",
      options: ["Linkedin", "Modeling", "Branding", "Children/Teens"],
      icon: "../../../public/assets/step1-icon.png",
      length: "25%",
      desciption: "Headshot Type",
    },
    {
      key: 2,
      question: "are you looking to get your headshot's in the next 2-4 weeks",
      options: ["Yes", "No"],
      icon: "../../../public/assets/step2-icon.png",
      length: "25%",
      desciption: "Expectation",
    },
    {
      key: 3,
      question: "how soon do you need your headshot's after out session?",
      options: ["24-48 Hours", "1 Week", "2-3 Weeks"],
      icon: "../../../public/assets/step3-icon.png",
      length: "50%",
      desciption: "Time Details",
    },
    {
      key: 4,
      question: "What is your budget range?",
      options: ["$200 - 500", "$500 - 1000", "$1k - 2k", "2k - 4k"],
      icon: "../../../public/assets/step4-icon.png",
      length: "75%",
      desciption: "Budget Details",
    },
    {
      key: 5,
      question: "what is your budget for this project?",
      options: ["$200 - 500", "$500 - 1000", "$1k - 2k", "2k - 4k"],
      icon: "../../../public/assets/step5-icon.png",
      length: "100%",
      desciption: "Peronal Details",
    },
  ];

  return (
    <div
      className={
        lgScreen
          ? "absolute top-[5rem] right-[1.8rem] max-w-[20.12rem] border-t-8 rounded-t-2xl border-black z-20  lg:-top-[15rem] lg:max-w-[28rem]"
          : "hidden"
      }
    >
      <div className="flex flex-col relative space-y-12 pb-4 border-[1px] border-black h-[35rem] bg-white rounded-xl">
        <div
          className="flex  space-x-4 items-center px-4 py-4 rounded-t-lg"
          style={{
            width: questions[currentQuestion].length,
            background: "#79D7FF",
          }}
        >
          <img src={questions[currentQuestion].icon} alt="" />
          <div className="flex flex-col font-semibold ">
            <p className="text-white py-[1px] text-center  w-20 bg-black rounded-full">
              Step {currentQuestion + 1}/5
            </p>
            <p className="w-[10rem]">{questions[currentQuestion].desciption}</p>
          </div>
        </div>
        <h1 className="uppercase text-left text-2xl font-black tracking-wider px-4">
          {questions[currentQuestion].question}
        </h1>
        <div className="grid grid-cols-2 gap-4 px-4">
          {questions[currentQuestion].options.map((option, i) => (
            <div
              key={i}
              className="flex flex-col w-full mx-auto py-4 space-y-2 items-center border cursor-pointer border-gray-400 rounded-xl group hover:border-black"
              onClick={handleClick}
            >
              <p className="text-md font-semibold">{option}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 right-0 left-0 grid grid-cols-2 gap-4 px-4">
          <button
            onClick={handleBack}
            className=" text-black py-3 font-bold  rounded-xl hover:border hover:border-black duration-300 overflow-hidden"
          >
            Back
          </button>
          <button
            onClick={handleClick}
            className="bg-black text-white py-3 font-bold  rounded-xl hover:bg-lightBlue hover:text-black duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CtaForm;
