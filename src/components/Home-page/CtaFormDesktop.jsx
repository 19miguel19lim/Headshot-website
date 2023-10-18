import { useState } from "react";
import { BreakPoints } from "../utils/BreakPoints";

function CtaFormDesktop() {
  const [currentQuestion, SetCurrentQuestion] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [form, setFrom] = useState(true);

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

  const handleSubmit = () => {
    setSubmit(!submit);
  };

  const hanldeFinish = () => {
    setFrom(!form);
  };

  const questions = [
    {
      key: 1,
      question: "what type of headshots are you looking for",
      options: ["Linkedin", "Modeling", "Branding", "Children/Teens"],
      icon: "assets/step1-icon.png",
      length: "25%",
      desciption: "Headshot Type",
      formIcon: "assets/form-1.png",
    },
    {
      key: 2,
      question: "are you looking to get your headshot's in the next 2-4 weeks",
      options: ["Yes", "No"],
      icon: "assets/step2-icon.png",
      length: "25%",
      desciption: "Expectation",
      formIcon: "assets/form-2.png",
    },
    {
      key: 3,
      question: "how soon do you need your headshot's after out session?",
      options: ["24-48 Hours", "1 Week", "2-3 Weeks"],
      icon: "assets/step3-icon.png",
      length: "50%",
      desciption: "Time Details",
      formIcon: "assets/form-3.png",
    },
    {
      key: 4,
      question: "What is your budget range?",
      options: ["$200 - 500", "$500 - 1000", "$1k - 2k", "2k - 4k"],
      icon: "assets/step4-icon.png",
      length: "75%",
      desciption: "Budget Details",
      formIcon: "assets/form-4.png",
    },
    {
      key: 5,
      question: "what is your budget for this project?",
      options: ["$200 - 500", "$500 - 1000", "$1k - 2k", "2k - 4k"],
      icon: "assets/step5-icon.png",
      length: "100%",
      desciption: "Peronal Details",
      formIcon: "assets/form-5.png",
    },
  ];

  return (
    <div
      className={
        !lgScreen
          ? "absolute right-[1.8rem]  border-t-8 rounded-t-2xl border-black z-20  lg:-top-[5rem] xl:-top-[10rem] xl:-right-[2rem]"
          : "hidden"
      }
    >
      {form && (
        <div className="flex flex-col relative space-y-2 pb-4 border-[1px] border-black h-[40rem] bg-white rounded-xl w-[44rem]">
          {submit ? (
            ""
          ) : (
            <>
              <div className="px-4 py-4 rounded-t-lg ">
                <div className="flex items-center space-x-12 w-full ">
                  {questions.map((curr, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <img
                        src={curr.formIcon}
                        className={
                          i === currentQuestion
                            ? "h-[38px] bg-lightBlue rounded-full p-[11px]"
                            : "h-[38px] rounded-full p-[11px]"
                        }
                      />

                      {i === currentQuestion ? (
                        <div className="flex flex-col font-semibold ">
                          <p className="text-white py-[1px] text-center w-20 bg-black rounded-full">
                            Step {currentQuestion + 1}/5
                          </p>
                          <p className="w-[10rem]">
                            {questions[currentQuestion].desciption}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {currentQuestion === 4 ? (
            <div className="flex flex-col h-full space-y-12 pt-4">
              {submit ? (
                <div className="min-w-[20.12rem] pt-24">
                  <div className="flex flex-col items-center text-center py-24 space-y-24">
                    <div className="relative">
                      <img
                        src="assets/green-check.png"
                        alt=""
                        className="z-10"
                      />
                      <div className="absolute -top-[30px] -right-[31px] z-0 opacity-30">
                        <div className="w-24 h-24 rounded-full bg-green-400 shadow-lg shadow-black"></div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <h1 className="uppercase text-center text-4xl font-black tracking-wider px-4">
                        all done
                      </h1>
                      <p>
                        Thank you for taking a moment to answer these questions.
                        You can expect to hear back from me within 24 hours.
                        Looking forward to working with you.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h1 className="uppercase text-left text-2xl font-black tracking-wider px-4">
                    {questions[4].question}
                  </h1>
                  <form className="grid grid-cols-1 gap-4 px-4">
                    <div className="flex flex-col space-y-0 w-full items-start">
                      <p className="text-sm font-black uppercase">first name</p>
                      <input
                        type="text"
                        className="py-2 pl-4 w-full border-[1px] border-gray-400 rounded-lg"
                        placeholder="First name"
                      />
                    </div>
                    <div className="flex flex-col space-y-0 w-full items-start">
                      <p className="text-sm font-black uppercase">first name</p>
                      <input
                        type="text"
                        className="py-2 pl-4 w-full border-[1px] border-gray-400 rounded-lg"
                        placeholder="First name"
                      />
                    </div>
                    <div className="flex flex-col space-y-0 w-full items-start">
                      <p className="text-sm font-black uppercase">first name</p>
                      <input
                        type="text"
                        className="py-2 pl-4 w-full border-[1px] border-gray-400 rounded-lg"
                        placeholder="First name"
                      />
                    </div>
                  </form>
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-col h-full space-y-12 pt-4">
              <h1 className="uppercase text-left text-2xl font-black tracking-wider px-4">
                {questions[currentQuestion].question}
              </h1>
              <div className="grid grid-cols-2 gap-4 px-4">
                {questions[currentQuestion].options.map((option, i) => (
                  <div
                    key={i}
                    className="flex flex-col w-full mx-auto py-4 space-y-2 items-center border cursor-pointer border-gray-400 rounded-xl group hover:border-black"
                    onClick={currentQuestion === 4 ? handleSubmit : handleClick}
                  >
                    <p className="text-md font-semibold">{option}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {submit ? (
            <div className="absolute bottom-6 right-0 left-0 gap-4 px-2">
              <button
                onClick={hanldeFinish}
                className="bg-black text-white py-3 w-full font-bold   rounded-xl hover:bg-lightBlue hover:text-black duration-300"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="absolute bottom-6 right-0 left-0 grid grid-cols-2 gap-4 px-4">
              <button
                onClick={handleBack}
                className=" text-black py-3 font-bold  rounded-xl hover:border hover:border-black duration-300 overflow-hidden"
              >
                Back
              </button>
              <button
                onClick={currentQuestion === 4 ? handleSubmit : handleClick}
                className="bg-black text-white py-3 font-bold  rounded-xl hover:bg-lightBlue hover:text-black duration-300"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CtaFormDesktop;
