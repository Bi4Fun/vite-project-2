import { BrowserRouter as Router, Route, Routes } from "react-router";
import Contact from "../../pages/Contact";
import New from "../../pages/New";
import PostDetail from "../../pages/PostDetail";
import Home from "../../pages/Home";
import DefaultLayout from "../../layouts/DefaultLayout";
import SidebarLayout from "../../layouts/SidebarLayout";
import NotFound from "../../layouts/components/NotFound";
import AdminLayout from "../../layouts/AdminLayout";
import Admin from "../../pages/Admin";
import Redux from "../../pages/Redux";
//Components:
import ScrollToTop from "../ScrollToTop";

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="new" element={<New />} />
          <Route path="/new/:id" element={<PostDetail />} />
        </Route>

        <Route element={<SidebarLayout />}>
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route index path="/admin" element={<Admin />} />
        </Route>

        {/* No layout */}
        <Route path="*" element={<NotFound />} />
        <Route path="/redux" element={<Redux />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
