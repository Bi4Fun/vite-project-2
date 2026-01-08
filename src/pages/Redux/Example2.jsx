import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../components/UserCard";
import PhotoCard from "../../components/PhotoCard";

// import http, { httpClient } from "../../utils/http";
// import httpJSONPlaceholder from "../../utils/httpJSONPlaceholder";

import style from "./Redux.module.scss";
import productActions from "../../store/product/actions";
import provinceActions from "../../store/province/actions";
import usersActions from "../../store/users/actions";
import photosActions from "../../store/photos/actions";

import { getProducts } from "../../store/product/selectors";
import { getProvinces } from "../../store/province/selectors";
import { getUsers } from "../../store/users/selectors";
import { getPhotos } from "../../store/photos/selectors";
import { getProductIsLoading } from "../../store/product/selectors";
import { getUsersIsLoading } from "../../store/users/selectors";

function ReduxExample2() {
  const [valueSelectedProvince, setValueSelectedProvince] = useState("");
  const [photoLimit, setPhotoLimit] = useState(0);

  const dispatch = useDispatch();
  // Lấy dữ liệu từ Redux store:
  const products = useSelector(getProducts);
  const provinces = useSelector(getProvinces);
  const users = useSelector(getUsers);
  const photos = useSelector(getPhotos);
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

  // get data của photos từ store:
  useEffect(() => {
    dispatch(photosActions.getList(photoLimit));
  }, [dispatch, photoLimit]);

  // handle province change
  const handleProvinceChange = (event) => {
    const selectedProvincesValue = event.target.value;
    setValueSelectedProvince(selectedProvincesValue);
  };

  // handle photo limit change
  const handlePhotoLimitChange = (event) => {
    const selectedPhotoValue = event.target.value;
    setPhotoLimit(selectedPhotoValue);
  };

  return (
    <>
      {/*Products */}
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
      {/* Provinces */}
      <fieldset className={style.legend}>
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
      {/* Users */}
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
      <br />
      {/* Photos */}
      <div className={style.wrapper}>Photos:</div>
      <div style={{ marginBottom: "8px" }}>
        <label htmlFor="photoLimit">表示する写真の数: </label>
        <select
          id="photoLimit"
          value={photoLimit}
          onChange={handlePhotoLimitChange}
          style={{ marginLeft: "8px", padding: "4px 8px" }}
        >
          <option value="">-- Select Photo Limit --</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div className={style.container}>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  );
}

export default ReduxExample2;
