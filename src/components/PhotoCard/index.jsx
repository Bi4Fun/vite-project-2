import React from "react";
import styles from "./PhotoCard.module.scss";

const PhotoCard = ({ photo }) => {
  return (
    <div className={styles.photoCard}>
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        className={styles.image}
      />
      <div className={styles.info}>
        <p className={styles.title}>{photo.title}</p>
        <p className={styles.id}>ID: {photo.id}</p>
        <p className={styles.albumId}>Album: {photo.albumId}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
