import React, { useId } from 'react'
import s from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';



const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const filterValue =  useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.container}>
         <p>Find contacts by name</p>
      <input  className={s.search}
        type="text"
        value={filterValue}
        onChange={ handleChange}
        placeholder='Enter your contact'
        id={searchId}
      />
    </div>
  )
}

export default SearchBox