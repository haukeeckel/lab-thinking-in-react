import React from 'react';
import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function FilterableProductTable({ products }) {
  const [currentProducts, setCurrentProducts] = useState(products);
  const [filteredProducts] = useState(products);

  const handleSearchInput = (event) => {
    setCurrentProducts(
      filteredProducts.filter((elem) => {
        return elem.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  return (
    <>
      <h1>IronStore</h1>
      <SearchBar fnSearch={handleSearchInput} />
      <ProductTable products={currentProducts} />
    </>
  );
}

export default FilterableProductTable;
