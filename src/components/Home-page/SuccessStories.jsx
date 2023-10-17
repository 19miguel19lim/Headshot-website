import { dataSuccess, position, content } from "../utils/contstant";
import { LiaComments, LiaHeart, LiaCloudUploadAltSolid } from "react-icons/lia";
import SuccessStoriesLg from "./SuccessStoriesLg";

import { BreakPoints } from "../utils/BreakPoints";
import SuccessStoriesSm from "./SuccessStoriesSm";

function SuccessStories() {
  const windowSize = BreakPoints();
  const mdSreen = windowSize.width >= 768;
  const lgScreen = windowSize.width >= 1025;
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
      </div>
      <div className="pt-24">
        {mdSreen ? <SuccessStoriesLg /> : <SuccessStoriesSm />}
      </div>
    </div>
  );
}

export default SuccessStories;
