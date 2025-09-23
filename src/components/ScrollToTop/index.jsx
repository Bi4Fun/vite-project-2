import { useLocation } from "react-router";
// import { useEffect } from "react";

//Vì là component sử dụng hook của react-router nên phải đặt component này trong Router
//Mục đích: Khi chuyển trang thì cuộn lên đầu trang
function ScrollToTop() {
  const location = useLocation();

  //Kiểm tra nếu có sự thay đổi đường dẫn thì thực hiện logic bên trong
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  if (location.pathname) {
    window.scrollTo(0, 0);
  }
  return null;
}
export default ScrollToTop;
