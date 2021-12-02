import React from 'react';

function ProductRow({ product, price }) {
  return (
    <tr>
      <th>{product}</th>
      <th>{price}</th>
    </tr>
  );
}

export default ProductRow;
