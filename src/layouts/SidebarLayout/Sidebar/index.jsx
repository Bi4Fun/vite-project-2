import styles from "./Sidebar.module.scss";

function Sidebar({ position = "left", children }) {
  const sidebarClass =
    position === "right" ? styles.sidebarRight : styles.sidebarLeft;
  return (
    <aside className={sidebarClass}>
      {children ? children : <h1>Sidebar</h1>}
    </aside>
  );
}

export default Sidebar;
