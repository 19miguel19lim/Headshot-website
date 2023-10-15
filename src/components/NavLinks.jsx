import { Link } from "react-router-dom";

function NavLinks({ handleNav }) {
  return (
    <>
      <li className="nav-item">
        <Link
          onClick={handleNav}
          className="nav-link font-bold text-[16px] hover:text-lightBlue duration-300"
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={handleNav}
          className="nav-link font-bold text-[16px] hover:text-lightBlue duration-300"
          to="/Graduation"
        >
          Graduation
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={handleNav}
          className="nav-link font-bold text-[16px] hover:text-lightBlue duration-300"
          to="/Model"
        >
          Model
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={handleNav}
          className="nav-link font-bold text-[16px] hover:text-lightBlue duration-300"
          to="/Faqs"
        >
          FAQs
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={handleNav}
          className="nav-link font-bold text-[16px] hover:text-lightBlue duration-300"
          to="/Blogs"
        >
          Blogs
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={handleNav}
          className="nav-link font-bold text-[16px] hover:text-lightBlue duration-300"
          to="/Contact"
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={handleNav}
          className="nav-link font-bold text-[16px] hover:text-lightBlue duration-300"
          to="/Model"
        >
          Model
        </Link>
      </li>
    </>
  );
}

export default NavLinks;
