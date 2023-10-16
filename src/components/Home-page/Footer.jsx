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
      <div className="max-w-lg mx-auto pl-10  lg:pl-0 lg:max-w-7xl">
        <div className="flex flex-col space-y-12 items-start justify-center lg:px-4">
          <div className="flex flex-col text-left space-y-6 lg:flex-row lg:space-y-0 lg:justify-between lg:w-full">
            <img src="assets/Logo-light.png" alt="" />
            <div className="flex flex-col items-start space-y-4 text-white lg:flex-row lg:space-y-0 lg:space-x-4">
              <p>Home</p>
              <p>Faqs</p>
              <p>Contact Us</p>
              <p>Privacy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="flex flex-col-reverse space-y-12 lg:flex-row lg:space-y-0 lg:justify-between lg:w-full">
            <p className="text-white mt-12 lg:mt-0">&copy;2023 HEADSHOTX</p>
            <div className="flex space-x-8">
              <FaTiktok fill="white" size={25} />
              <FaInstagram fill="white" size={25} />
              <FaTwitter fill="white" size={25} />
              <FaFacebookSquare fill="white" size={25} />
              <FaLinkedinIn fill="white" size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
