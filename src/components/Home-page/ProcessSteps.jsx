function ProcessSteps() {
  const data = [
    {
      key: 1,
      title: "quick and easy booking 🚀",
      description:
        "Booking with is a fast and simple process. Request a free quite from out website here or book your entire team automatically by clicking here. We only require a 50% deposit to hold your data so each out to us!",
      image: "assets/step1-img.webp",
    },
    {
      key: 2,
      title: "simple shooting sessions",
      description:
        "We value saving your company time. Our entire portrait kit can fit into a 10x10ft space and takes under 30 minutes to setup. If you have a short time constraint to photograph your team we can activate multiple shooting bays in order to move faster through the sessions.",
      image: "assets/step2-img.webp",
    },
    {
      key: 3,
      title: "easy delivery",
      description:
        "Our delivery times are consistently averaging between 48 - 72 hours across every company size. All images can be delivered in one gallery or a separate gallery can be delivered to each employee directly to their email we save on file. Editing is included with every image so your staff will be looking their best. ",
      image: "assets/step3-img.webp",
    },
  ];
  return (
    <div className="flex flex-col relative space-y-20  items-center z-10 bg-gradient-to-t from-white via-blue-200 to-white">
      {/* first step */}
      {data.map((curr, i) => {
        return (
          <div
            key={i}
            className="flex flex-col px-4 space-y-6 lg:flex-row lg:space-y-0 lg:space-x-24"
          >
            <div className="flex flex-col space-y-6 z-10">
              <p
                className={
                  i === data.length - 3
                    ? "text-4xl h-14 w-14 text-center rounded-full font-black border-[2px] bg-lightBlue "
                    : "text-4xl h-14 w-14 text-center rounded-full font-black border-[2px] border-black"
                }
              >
                {i + 1}
              </p>
              <h1 className="text-3xl font-black uppercase">{curr.title}</h1>
              <p className="max-w-md">{curr.description}</p>
            </div>
            <img
              src={curr.image}
              alt={curr.name}
              className="w-[28rem] brightness-90"
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProcessSteps;
