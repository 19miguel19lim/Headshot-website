import { dataSuccess, position, content } from "../utils/contstant";
import { LiaComments, LiaHeart, LiaCloudUploadAltSolid } from "react-icons/lia";

function SuccessStorisLg() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dataSuccess.map((curr) => (
        <div
          key={curr.id}
          className="flex flex-col px-4 py-12 space-y-12 rounded-xl border-t-4 border-black "
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
            <LiaComments
              size={25}
              className="hover:fill-lightBlue duration-300"
            />
            <LiaHeart size={25} className="hover:fill-lightBlue duration-300" />
            <LiaCloudUploadAltSolid
              size={25}
              className="hover:fill-lightBlue duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuccessStorisLg;
