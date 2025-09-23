import { useEffect, useState } from "react";
import style from "./Admin.module.scss";
import defaultAvatar from "../../assets/images/default-avatar.png";

function Admin() {
  const [previewAvatar, setPreviewAvatar] = useState("");

  // Xử lý preview ảnh render lên (dùng blob)
  function handleFileChange(event) {
    const file = event.target.files[0];
    const previewURL = URL.createObjectURL(file);
    setPreviewAvatar(previewURL);
    console.log(previewURL);
  }
  // Dọn dẹp blob khi chọn ảnh khác (sẽ loại bỏ blob ảnh cũ) để tránh rò rỉ bộ nhớ
  useEffect(() => {
    return () => {
      if (previewAvatar) {
        URL.revokeObjectURL(previewAvatar);
      }
    };
  }, [previewAvatar]);

  return (
    <>
      <div className={style.wrapper}>
        Admin page
        <label>
          <input type="file" hidden onChange={handleFileChange} />
          <img
            className={style.img_avatar}
            src={previewAvatar || defaultAvatar}
            alt="Admin avatar"
          />
        </label>
      </div>
    </>
  );
}

export default Admin;
