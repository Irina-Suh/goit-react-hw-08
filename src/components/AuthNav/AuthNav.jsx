import clsx from "clsx";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(isActive && "text-red-500");
  };
  return (
    <div className="flex gap-10">
      <NavLink className={setActiveClass} to="/login">
        Login
      </NavLink>
      <NavLink className={setActiveClass} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;