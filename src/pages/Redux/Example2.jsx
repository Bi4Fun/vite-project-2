import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import http, { httpClient } from "../../utils/http";

import style from "./Redux.module.scss";
import productActions from "../../strore/product/actions";
import provinceActions from "../../strore/province/actions";
import { getProducts } from "../../strore/product/selectors";
import { getProvinces } from "../../strore/province/selectors";

function ReduxExample2() {
  const [valueSelectedProvince, setValueSelectedProvince] = useState("");

  const dispatch = useDispatch();
  // Lấy dữ liệu từ Redux store:
  const products = useSelector(getProducts);
  const provinces = useSelector(getProvinces);

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

  const handleProvinceChange = (event) => {
    const selectedValue = event.target.value;
    setValueSelectedProvince(selectedValue);
  };

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
      <fieldset className={style.lengend}>
        <legend style={{ fontWeight: "bold", color: "#333" }}>Provinces</legend>
        <label htmlFor="provinces">Provinces:</label>
        <select
          name="provinces"
          id="province"
          value={valueSelectedProvince}
          onChange={handleProvinceChange}
        >
          <option value="">-- Select Province --</option>
          {provinces.map((province) => (
            <option key={province.province_id} value={province.name}>
              {/* This line renders the name of each province in the select dropdown */}
              {province.name}
            </option>
          ))}
        </select>
        <p>Selected Province: {valueSelectedProvince}</p>
      </fieldset>
    </>
  );
}

export default ReduxExample2;
