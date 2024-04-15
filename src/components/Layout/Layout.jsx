import clsx from "clsx";
import css from "./Layout.module.css";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  const getActiveStyles = ({ isActive }) =>
    clsx(css.navLink, { [css.active]: isActive });
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={getActiveStyles}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getActiveStyles}>
          Movies
        </NavLink>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
