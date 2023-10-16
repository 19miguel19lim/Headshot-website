import ProcessSteps from "./ProcessSteps";

function Process() {
  return (
    <div className="flex flex-col relative  mx-auto py-12 pb-44  space-y-12 ">
      <h1 className="text-4xl font-black text-center uppercase z-10">
        the process
      </h1>
      {/* floating images TODO!!!! */}
      <div className="h-44 overflowX-fidden relative"></div>
      {/* 3-steps */}
      <ProcessSteps />
    </div>
  );
}

export default Process;
