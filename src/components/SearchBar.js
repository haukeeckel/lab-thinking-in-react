import React from 'react';

function SearchBar({ fnSearch }) {
  return (
    <form>
      <input onChange={fnSearch} type="text" />
    </form>
  );
}

export default SearchBar;
