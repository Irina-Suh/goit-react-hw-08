
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox"
 import ContactList from "./components/ContactList/ContactList"
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader";


function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className='container'>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox  />
  {loading && !error && <Loader/>}
  <ContactList   /> 

</div>

  )
}

export default App
