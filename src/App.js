import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";



function App() {
  const [items, setItems] = useState(() => {
    // Initialize state with localStorage or default list
    const savedItems = localStorage.getItem('todo_list');
    return savedItems && savedItems !== '[]'// Check if savedItems is not null or empty array string
      ? JSON.parse(savedItems)
      : [
          { id: 1, checked: true, item: 'practice coding' },
          { id: 2, checked: true, item: 'Do reading' },
          { id: 3, checked: false, item: 'play' },
          { id: 4, checked: true, item: 'wash dishes' },
        ];
  });

  // Effect hook to synchronize localStorage with items state
  useEffect(() => {
    localStorage.setItem('todo_list', JSON.stringify(items));
  }, [items]);

  const handleCheck = (id) => {
    // Toggle the checked status of the item
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDelete = (id) => {
    // Handle the deletion of an item
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Header title="MY PROJECT To-Do List" />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />

      <Footer 
        length = {items.length}
        />
    </div>
  );
}

export default App;
