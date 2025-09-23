import style from "./Admin.module.scss";
import defaultAvatar from "../../assets/images/default-avatar.png";
function Admin() {
  return (
    <>
      <div className={style.wrapper}>
        Admin page
        <label>
          <input type="file" hidden />
          <img
            className={style.img_avatar}
            src={defaultAvatar}
            alt="Admin avatar"
          />
        </label>
      </div>
    </>
  );
}

export default Admin;
