import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "../components/Header";
import Sidebar from "./Sidebar";

function SidebarLayout() {
  return (
    <>
      <Header />
      <div>
        <Sidebar position="left" title="Left Sidebar" />
        <Outlet />
        <Sidebar position="right" title="Right Sidebar" />
      </div>
      <Footer />
    </>
  );
}
export default SidebarLayout;
