import BeforeAfter from "./BeforeAfter";

function ImageRetouching() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 px-4 max-w-xl mx-auto lg:flex-row lg:space-y-0 lg:space-x-6 lg:max-w-7xl">
      <BeforeAfter
        // pointerMove
        beforeImage="image"
        afterImage="https://picsum.photos/id/646/1920/1080"
      />
      <BeforeAfter
        // pointerMove
        beforeImage="image"
        afterImage="https://picsum.photos/id/637/1920/1080"
      />
    </div>
  );
}

export default ImageRetouching;
