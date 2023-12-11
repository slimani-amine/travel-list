import React, { useState } from "react";

export default function Form({ addItems }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <form
      className="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (!desc) return;
        const newItem = {
          id: Date.now(),
          quantity: quantity,
          description: desc,
          packed: false,
        };
        addItems(newItem);
      }}
    >
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
