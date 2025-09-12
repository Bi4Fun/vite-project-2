import style from "./New.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function New() {
  const [pots, setPots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((pots) => setPots(pots));
  }, []);
  console.log();
  return (
    <>
      <div className={style.wrapper}>NEWS</div>
      {pots.map((pot) => (
        <ul className={style.ulStyle}>
          <li key={pot.id}>
            <Link to={`/new/${pot.id}`}>{pot.title}</Link>
          </li>
        </ul>
      ))}
    </>
  );
}

export default New;
