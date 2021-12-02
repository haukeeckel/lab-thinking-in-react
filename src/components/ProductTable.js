import React from 'react';
import ProductRow from './ProductRow';
import { useState } from 'react';

function ProductTable({ products }) {
  console.log(products);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((elem, i) => {
          return <ProductRow key={i} product={elem.name} price={elem.price} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
