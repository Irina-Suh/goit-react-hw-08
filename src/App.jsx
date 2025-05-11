
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox"
 import ContactList from "./components/ContactList/ContactList"
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { fetchContacts } from "./redux/contactsOps";
// import { selectError, selectLoading } from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Layout from './components/Layout/Layout'
import NotFound from "./pages/NotFound";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";




function App() {
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const isRefreshing = useSelector(selectIsRefreshing);
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
  isRefreshing ? null : (
    <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
      <Route
        path='contacts'
        element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
        }
      />
    </Route>
    <Route path='*' element={<NotFound />} />
    <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />

    <Route path='/register' element={<RegistrationPage />} />
  </Routes>
     
     
    )


  )
}

export default App
