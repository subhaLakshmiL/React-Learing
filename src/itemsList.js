import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const ItemsList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li className='item' key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          />
          <label
            style={{ textDecoration: item.checked ? 'line-through' : 'none' }}
            onDoubleClick={() => handleCheck(item.id)}
          >
            {item.item}
          </label>
          <FaTrashAlt
            role="button"
            onClick={() => handleDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
