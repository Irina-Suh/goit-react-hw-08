import React from 'react'
import s from './Contact.module.css'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contacts/operations';


const Contact = ({name,number, id}) => {
  const dispatch = useDispatch();
  const onDelete = ()=> {
    dispatch(deleteContact(id));
  }
  
  return (
    <div className={s.container}>
    <div >
        <p>{name}</p>
        <p>{number}</p>
        </div>
        <button type='button' className={s.btn} onClick={onDelete}>
        Delete
      </button>  

    
    </div>
  )
}

export default Contact