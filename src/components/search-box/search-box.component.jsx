import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './search-box.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SearchBox = ({ placeholder,handleChange }) => (
    <InputGroup className="mb-6"
    onChange={ handleChange }
    >
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder={placeholder}
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
    // <input 
    //     className='search'
    //     type='search' 
    //     placeholder={placeholder} 
    //     onChange={handleChange}
    // />
);