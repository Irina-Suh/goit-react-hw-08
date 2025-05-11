import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import { logOut } from "../../redux/auth/operations";



const Navigation = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);



  const setActiveClass = ({ isActive }) => {
    return clsx(isActive && "text-red-500");
  };
  const isAuthenticated = useSelector(selectIsLoggedIn);

  return (
    <header className='flex justify-between p-[20px] bg-slate-700 text-white font-bold text-3xl'>
 
          {isAuthenticated ? 
          <div className='flex gap-5'>
          <h2>Hello,{user.name}</h2> 
           <button onClick={() => dispatch(logOut())} className='btn btn-secondary'>
            Logout
          </button>
          </div>
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