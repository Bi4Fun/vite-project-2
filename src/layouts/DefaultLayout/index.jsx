import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "./Navigation";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default DefaultLayout;
