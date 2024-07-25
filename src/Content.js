import React from 'react';
import ItemsList from './itemsList'; // Correct import statement for ItemsList component


const Content = ({ items, handleCheck, handleDelete }) => {
 // Check if items is undefined or null
  

  return (
    <div>
      {(items.length ) ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>Your List is Empty</p>
      )}
    </div>
  );
};

export default Content;
