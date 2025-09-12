import { BrowserRouter as Router, Route, Routes } from "react-router";
import Contact from "../../pages/Contact";
import New from "../../pages/New";
import PostDetail from "../../pages/PostDetail";
import Home from "../../pages/Home";
import DefaultLayout from "../../layouts/DefaultLayout";
import SidebarLayout from "../../layouts/SidebarLayout";
import NotFound from "../../layouts/components/NotFound";
import ScrollToTop from "../ScrollToTop";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/new/:id" element={<PostDetail />} />
        </Route>

        <Route element={<SidebarLayout />}>
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
