import clsx from "clsx";

import { NavLink } from "react-router-dom";
import { selectIsLoggedIn} from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";

import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";



const Navigation = () => {


  const setActiveClass = ({ isActive }) => {
    return clsx(isActive && "text-red-500");
  };
  const isAuthenticated = useSelector(selectIsLoggedIn);

  return (
    <header className='flex justify-between p-[20px] bg-slate-700 text-white font-bold text-3xl'>
 
          {isAuthenticated ? 
         <UserMenu/>
          :<AuthNav />}
      <nav className='flex gap-3'>
        <NavLink className={setActiveClass} to='/'>
          Home
        </NavLink>
        <NavLink className={setActiveClass} to='/contacts'>
          Contacts
        </NavLink>
        
         
     
      </nav>
 </header>
        

    
  );
};

export default Navigation;