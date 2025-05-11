import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import toast from 'react-hot-toast';
import { useEffect } from 'react';


const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);


  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('This is private page for logged users');
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
   
    return <Navigate to='/login' />;
  }
  return children;
};
export default PrivateRoute;