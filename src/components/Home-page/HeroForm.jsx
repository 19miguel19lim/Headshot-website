function HeroForm() {
  return (
    <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 px-4">
      <input
        type="text"
        placeholder="zip code"
        className="border-[1px] py-2 px-2 border-darkGray w-[20rem] md:w-[16rem] rounded-lg md:rounded-r-none md:rounded-l-lg xl:w-[30rem]"
      />
      <button className="py-4 px-4 text-sm text-white bg-darkGray rounded-lg md:rounded-r-lg hover:bg-gray-600 md:rounded-l-none  duration-300 xl:text-2xl">
        Request Quote
      </button>
    </form>
  );
}

export default HeroForm;
