import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

const navItems = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/new",
    label: "New",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];

function Navigation() {
  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? styles.active : "" + styles.underline_none
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
