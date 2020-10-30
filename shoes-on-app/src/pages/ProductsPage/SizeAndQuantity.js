import React from 'react';

const sizes = [36, 37, 38, 39, 40, 41, 42, 43];

export default function SizeAndQuantity(props) {
  return (
    <div>
      <p>Size</p>
      <select name="sizes" id="sizes" onChange={props.handleSize}>
        {sizes.map((size) => {
          return (
            <option key={size} value={size}>
              {size}
            </option>
          );
        })}
      </select>

      <p>Quantity</p>
      <select name="quantity" id="quantity" onChange={props.handleQuantity}>
        <option value="0">0</option>
        <option value="1">1</option>;
      </select>
    </div>
  );
}
