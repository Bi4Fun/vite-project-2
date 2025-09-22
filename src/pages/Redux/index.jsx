import style from "./Redux.module.scss";
import { useEffect } from "react";
import { Link } from "react-router";

function Redux() {
  useEffect(() => {
    return (
      <>
        <div className={style.Redux}></div>
        <h1>Redux Page</h1>
        <Link to="/">Go to Home</Link>
      </>
    );
  }, []);
}

export default Redux;
