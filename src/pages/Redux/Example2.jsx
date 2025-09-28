import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import http, { httpClient } from "../../utils/http";

import style from "./Redux.module.scss";
import productActions from "../../strore/product/actions";

function ReduxExample2() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.list);

  useEffect(() => {
    (async () => {
      const httpResponse = await http.get("/products");
      dispatch(productActions.setList(httpResponse.data.items));
    })();
  }, [dispatch]);

  return (
    <>
      <div className={style.wrapper}>Redux Page Example 2</div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default ReduxExample2;
