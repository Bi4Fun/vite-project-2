import styles from "./Header.module.scss";
function Header({ backgroundColor }) {
  return (
    <header>
      <h1 className={styles.wrapper} style={{ backgroundColor }}>
        Header
      </h1>
    </header>
  );
}
export default Header;
