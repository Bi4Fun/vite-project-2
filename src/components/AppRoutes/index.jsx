import { BrowserRouter as Router, Route, Routes } from "react-router";
import Contact from "../../pages/Contact";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Navigation from "../../layouts/Navigation";

function AppRoutes() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
