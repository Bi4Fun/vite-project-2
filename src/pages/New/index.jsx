import style from "./New.module.scss";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";

const arrayNews = Array(10).fill();
function New() {
  const [param, setParam] = useSearchParams();
  const [pots, setPots] = useState([]);
  const [page, setPage] = useState(() => +param.get("page") || 1);
  //Gọi API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((res) => res.json())
      .then((pots) => setPots(pots));
  }, [page]);

  //Khi thay đổi page thì set param để
  useEffect(() => {
    setParam({ page });
  }, [page, setParam]);

  return (
    <>
      <div className={style.wrapper}>NEWS</div>
      {pots.map((post) => (
        <ul className={style.ulStyle}>
          <li key={post.id}>
            <Link to={`/new/${post.id}`}>{post.title}</Link>
          </li>
        </ul>
      ))}
      <h2>Phân trang</h2>
      <ul>
        {arrayNews.map((__, index) => (
          <li
            key={index}
            className={style.pagination}
            style={{
              backgroundColor: page === index + 1 ? "#eba754" : "transparent",
              color: page === index + 1 ? "#ffffff" : "#000000",
            }}
            onClick={() => {
              setPage(index + 1);
            }}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </>
  );
}

export default New;
