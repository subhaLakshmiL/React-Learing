import React, { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  // Initialize state with a saved local storage item or default list
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('todo_list');
    return savedItems ? JSON.parse(savedItems) : [
      { id: 1, checked: true, item: 'Practice coding' },
      { id: 2, checked: true, item: 'Do reading' },
      { id: 3, checked: false, item: 'Play' },
      { id: 4, checked: true, item: 'Wash dishes' },
    ];
  });

  // Effect hook to synchronize localStorage with items state
  useEffect(() => {
    localStorage.setItem('todo_list', JSON.stringify(items));
  }, [items]);

  // Toggle the checked status of the item
  const handleCheck = (id) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  // Handle the deletion of an item
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Header title="MY PROJECT To-Do List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
