import React, { } from 'react'
import { Form, Field, Formik, ErrorMessage} from 'formik'
import s from './ContactForm.module.css'
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import SearchBox from '../SearchBox/SearchBox';

// import { nanoid } from 'nanoid';


const ContactForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, {resetForm}) => {
    const newContact = {
      // id: nanoid (),
      name: values.name,
      number: values.number,
    };
  
   
    dispatch(addContact(newContact));
    resetForm();
  };

    const initialValues = {
        name: '',
        number: ''
    }

    const re = /^\d{3}-\d{2}-\d{2}$/;
    const feedbackSchema = Yup.object().shape({
name: Yup.string().trim().min(3, "Too Short!").max(50, "Too Long!").required(),
 number:Yup.string().trim().matches(re, 'Format must be 444-44-44').required(),

    });


  return (
    <div>
        <Formik validationSchema={feedbackSchema} onSubmit={onSubmit} initialValues ={initialValues}>
        <Form className={s.form} >
            <label className='label'> Name
            <Field  type="text" className='input' placeholder='Name' name ='name' />
            <ErrorMessage name ='name' className={s.error} component={'div'}/>
            </label>
            <label className='label'> Number
            <Field type="text"  className='input'   placeholder='444-44-44' name ='number'/>
            <ErrorMessage name ='number'  className={s.error}  component={'div'}/>
            </label>
            <button  className={s.button} type='submit'>Add contact</button>
        </Form>
        </Formik>
        <SearchBox  />
        </div>
  )
}

export default ContactForm