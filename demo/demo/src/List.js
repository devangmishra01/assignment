import React from 'react'
import { useState } from "react";
import "./App.css";

const ListItem = ({ item, onDelete }) => {
  return (
    <div className="list-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button className="delete" onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
};
function List() {
  // State to manage the list of items
  const [items, setItems] = useState([]);
  // State to manage form input fields
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  // Function to handle form submission and add new items to the list
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Generate a unique id for the new item
    const newItem = {
      id: Date.now(),
      name: itemName,
      description: itemDescription,
    };
    // Update the list of items by adding the new item to the end
    setItems([...items, newItem]);
    // Clear the form fields
    setItemName("");
    setItemDescription("");
  };


  // Function to handle item deletion
  const handleDelete = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };
  return (
    <>
      <div className="dev">
        <h2>Item List</h2>
        {/* Form to add new items */}
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              required
            />
          </label>
          <button type="submit">Add Item</button>
        </form>
        {/* List of items */}
        <div className="item-list">
          {items.map((item) => (
            <ListItem key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
}

export default List