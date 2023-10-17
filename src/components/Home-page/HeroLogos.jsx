function HeroLogos() {
  return (
    <div className="h-16 grid grid-cols-2 md:grid-cols-4  px-4 items-center justify-items-center gap-16 max-w-xl md:scale-125">
      <img
        src="assets/trustpilot-logo.png"
        alt=""
        className="hover:scale-105 duration-300"
      />

      <div className="flex items-center hover:scale-105 duration-300 space-x-2 -ml-4">
        <img
          src="assets/google-rating-logo.png"
          alt=""
          className=" duration-300"
        />
        <img src="assets/google-stars.png" alt="" className="h-8 " />
      </div>

      <img
        src="assets/thumbtack-logo.png"
        alt=""
        className="hover:scale-105 duration-300"
      />

      <img
        src="assets/bbb-logo.png"
        alt=""
        className="hover:scale-105 duration-300"
      />
    </div>
  );
}

export default HeroLogos;
