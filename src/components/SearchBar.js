import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
function SearchBar({ searchChange }) {
  return (
    <>
      <InputGroup className="mb-3">
        {/* <i class="fas fa-search"></i> */}
        <FormControl placeholder="search name" onChange={searchChange} />
      </InputGroup>
    </>
  );
}

export default SearchBar;
