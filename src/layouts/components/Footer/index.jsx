import styles from "./Footer.module.scss";

function Footer({ backgroundColor }) {
  return (
    <header>
      <h1 className={styles.wrapper} style={{ backgroundColor }}>
        Footer
      </h1>
    </header>
  );
}

export default Footer;
