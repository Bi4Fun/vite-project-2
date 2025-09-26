import style from "./Redux.module.scss";
import { Link } from "react-router";

function Redux() {
  return (
    <>
      <div className={style.wrapper}>Redux Page</div>
      <Link to="/">Go to Home</Link>
    </>
  );
}

export default Redux;
