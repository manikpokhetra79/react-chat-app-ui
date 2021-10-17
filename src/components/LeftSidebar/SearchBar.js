import React from 'react';

function SearchBar({ searchChange }) {
  return (
    <>
      <input
        style={styles.input}
        className="mb-3"
        placeholder="search name"
        onChange={searchChange}
      ></input>
    </>
  );
}
const styles = {
  input: {
    borderRadius: '18px',
    width: '80%',
    backgroundColor: '#fff',
    outline: 'none',
    color: 'grey',
  },
};
export default SearchBar;
