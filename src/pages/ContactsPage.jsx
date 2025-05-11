import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { selectError, selectLoading } from "../redux/contacts/selectors";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Loader from "../components/Loader/Loader";



const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      {isLoading && !error && ( <Loader /> )}
      <ContactList />
    </div>
  );
};

export default ContactsPage;