import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../components/UserCard";

import http, { httpClient } from "../../utils/http";
import httpJSONPlaceholder from "../../utils/httpJSONPlaceholder";

import style from "./Redux.module.scss";
import productActions from "../../strore/product/actions";
import provinceActions from "../../strore/province/actions";
import userActions from "../../strore/users/actions";

import { getProducts } from "../../strore/product/selectors";
import { getProvinces } from "../../strore/province/selectors";
import { getUsers } from "../../strore/users/selectors";

function ReduxExample2() {
  const [valueSelectedProvince, setValueSelectedProvince] = useState("");

  const dispatch = useDispatch();
  // Lấy dữ liệu từ Redux store:
  const products = useSelector(getProducts);
  const provinces = useSelector(getProvinces);
  const users = useSelector(getUsers);

  useEffect(() => {
    (async () => {
      // const httpProuctResponse = await http.get("/products");
      const httpProuctResponse = await http.get("/products");
      dispatch(productActions.setList(httpProuctResponse.data.items));
      // dispatch(productActions.setList(httpProuctResponse.data.items));
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const httpProvinceResponse = await http.get("/address/provinces");
      dispatch(provinceActions.setList(httpProvinceResponse.data));
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const httpUsersResponse = await httpJSONPlaceholder.get("/users");
      dispatch(userActions.setList(httpUsersResponse));
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
          id="provinces"
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
      <br />
      <div className={style.wrapper}>Users:</div>
      {users && (
        <div className={style.container}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
}

export default ReduxExample2;
