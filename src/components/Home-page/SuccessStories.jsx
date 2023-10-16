import { dataSuccess, position, content } from "../utils/contstant";
import { LiaComments, LiaHeart, LiaCloudUploadAltSolid } from "react-icons/lia";

function SuccessStories() {
  return (
    <div className="max-w-md mx-auto px-4 md:max-w-xl pt-20 pb-44 lg:max-w-7xl">
      <div className="flex flex-col items-center space-y-16 text-center">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-black uppercase">
            more success stories
          </h1>
          <p className="text-sm text-gray-400 max-w-sm mx-auto md:px-4  xl:text-lg">
            We can 100% match an existing company style and keep things
            consistent!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataSuccess.map((curr) => (
            <div
              key={curr.id}
              className="flex flex-col px-4 py-2 space-y-12 rounded-xl border-t-4 border-black"
            >
              <div className="flex w-full items-center justify-between">
                <img src={curr.image} alt="" />
                <div className="flex flex-col text-left">
                  <h1>{curr.name}</h1>
                  <p>{position}</p>
                </div>
                <img src={curr.social} alt="" />
              </div>
              <p className="text-left max-w-sm">{content}</p>
              <div className="flex space-x-4 items-start w-1/2">
                <LiaComments size={25} />
                <LiaHeart size={25} />
                <LiaCloudUploadAltSolid size={25} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
