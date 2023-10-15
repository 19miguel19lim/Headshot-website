import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Graduation from "./pages/Graduation";
import Model from "./pages/Model";
import Faqs from "./pages/Faqs";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/Graduation" element={<Graduation />} />
        <Route path="/Model" element={<Model />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
