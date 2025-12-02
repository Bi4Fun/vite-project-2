import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../components/UserCard";

// import http, { httpClient } from "../../utils/http";
// import httpJSONPlaceholder from "../../utils/httpJSONPlaceholder";

import style from "./Redux.module.scss";
import productActions from "../../store/product/actions";
import provinceActions from "../../store/province/actions";
import usersActions from "../../store/users/actions";

import { getProducts } from "../../store/product/selectors";
import { getProvinces } from "../../store/province/selectors";
import { getUsers } from "../../store/users/selectors";
import { getProductIsLoading } from "../../store/product/selectors";
import { getUsersIsLoading } from "../../store/users/selectors";

function ReduxExample2() {
  const [valueSelectedProvince, setValueSelectedProvince] = useState("");

  const dispatch = useDispatch();
  // Lấy dữ liệu từ Redux store:
  const products = useSelector(getProducts);
  const provinces = useSelector(getProvinces);
  const users = useSelector(getUsers);
  const isProductLoading = useSelector(getProductIsLoading);
  const isUsersLoading = useSelector(getUsersIsLoading);

  // get data của products từ store:
  useEffect(() => {
    dispatch(productActions.getList());
  }, [dispatch]);

  // get data của provinces từ store:
  useEffect(() => {
    dispatch(provinceActions.getList());
  }, [dispatch]);

  // get data của users từ store:
  useEffect(() => {
    dispatch(usersActions.getList());
  }, [dispatch]);

  const handleProvinceChange = (event) => {
    const selectedValue = event.target.value;
    setValueSelectedProvince(selectedValue);
  };

  return (
    <>
      <h1 className={style.wrapper}>Redux Page Example 2</h1>
      <div className={style.wrapper}>Products:</div>
      {isProductLoading ? (
        <div>Loading products...</div>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
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
      {isUsersLoading ? (
        <div>Loading users...</div>
      ) : (
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
