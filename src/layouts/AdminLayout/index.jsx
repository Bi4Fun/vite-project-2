import Admin from "../../pages/Admin";
import Footer from "../components/Footer";
import Header from "../components/Header";
function AdminLayout() {
  return (
    <>
      <Header backgroundColor={"#e97878ff"} />
      <Admin />
      <Footer backgroundColor={"#e97878ff"} />
    </>
  );
}
export default AdminLayout;
