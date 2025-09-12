import { useLocation } from "react-router";

function ScrollToTop() {
  const location = useLocation();

  if (location.pathname) {
    window.scrollTo(0, 0);
  }
  return null;
}
export default ScrollToTop;
