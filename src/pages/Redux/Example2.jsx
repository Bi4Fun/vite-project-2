import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import http, { httpClient } from "../../utils/http";

import style from "./Redux.module.scss";
import productActions from "../../strore/product/actions";
import provinceActions from "../../strore/province/actions";

function ReduxExample2() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.list);
  const provinces = useSelector((state) => state.province.list);
  console.log(products);
  console.log(provinces);

  useEffect(() => {
    (async () => {
      const httpProuctResponse = await http.get("/products");
      dispatch(productActions.setList(httpProuctResponse.data.items));
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const httpProvinceResponse = await http.get("/address/provinces");
      dispatch(provinceActions.setList(httpProvinceResponse.data));
    })();
  }, [dispatch]);

  return (
    <>
      <h1 className={style.wrapper}>Redux Page Example 2</h1>
      <div className={style.wrapper}>Products:</div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <br />
      <div className={style.wrapper}>Provinces:</div>
      <ul>
        {provinces.map((province) => (
          <li key={province.province_id}>{province.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ReduxExample2;
