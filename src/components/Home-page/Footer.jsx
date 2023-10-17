import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black py-12">
      <div className=" mx-auto pl-10  lg:pl-0 ">
        <div className="flex flex-col space-y-12 items-start justify-center lg:px-20">
          <div className="flex flex-col text-left space-y-6 lg:flex-row lg:space-y-0 lg:justify-between lg:w-full">
            <a href="#">
              <img src="assets/Logo-light.png" alt="" />
            </a>
            <div className="flex flex-col items-start space-y-4 text-white lg:flex-row lg:space-y-0 lg:space-x-4">
              <a href="#" className="hover:text-lightBlue cursor-pointer">
                Home
              </a>
              <a href="/" className="hover:text-lightBlue cursor-pointer">
                Faqs
              </a>
              <a href="/" className="hover:text-lightBlue cursor-pointer">
                Contact Us
              </a>
              <a href="/" className="hover:text-lightBlue cursor-pointer">
                Privacy
              </a>
              <a href="/" className="hover:text-lightBlue cursor-pointer">
                Terms & Conditions
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse space-y-12 lg:flex-row lg:space-y-0 lg:justify-between lg:w-full">
            <p className="text-gray-600 mt-12 lg:mt-0">&copy;2023 HEADSHOTX</p>
            <div className="flex space-x-8">
              <FaTiktok
                fill="white"
                size={25}
                className="hover:fill-lightBlue cursor-pointer"
              />
              <FaInstagram
                fill="white"
                size={25}
                className="hover:fill-lightBlue cursor-pointer"
              />
              <FaTwitter
                fill="white"
                size={25}
                className="hover:fill-lightBlue cursor-pointer"
              />
              <FaFacebookSquare
                fill="white"
                size={25}
                className="hover:fill-lightBlue cursor-pointer"
              />
              <FaLinkedinIn
                fill="white"
                size={25}
                className="hover:fill-lightBlue cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
