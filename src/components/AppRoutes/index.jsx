import { BrowserRouter as Router, Route, Routes } from "react-router";
import { useSelector } from "react-redux";
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
import ReduxExample2 from "../../pages/Redux/Example2";
//Components:
import ScrollToTop from "../ScrollToTop";
import ExampleToDo from "../../pages/Redux/ExampleToDo/ExampleToDo";
import Loading from "../Loading";

//selector từ store:
import { showLoading } from "../../store/loading/selectors";

function AppRoutes() {
  const isLoading = useSelector(showLoading);
  return (
    <Router>
      <ScrollToTop />
      {isLoading && <Loading />}
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
        <Route path="/redux-example-2" element={<ReduxExample2 />} />
        <Route path="/redux-example-to-do" element={<ExampleToDo />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
