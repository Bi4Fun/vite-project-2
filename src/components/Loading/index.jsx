import styles from "./Loading.module.scss";

function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Loading;
