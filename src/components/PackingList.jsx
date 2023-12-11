import React, { useState } from "react";

export default function PackingList({
  items,
  deleteItem,
  updateitem,
  clearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems &&
          sortedItems.map((item, i) => {
            return (
              <Item
                item={item}
                key={item.id}
                deleteItem={deleteItem}
                updateitem={updateitem}
              />
            );
          })}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input description</option>
          <option value="packed">Sort by input packed</option>
        </select>
        <button
          onClick={() => {
            if (window.confirm("Really to delete all the items ?")) {
              clearItems();
            } else {
              return;
            }
          }}
        >
          clear list
        </button>
      </div>
    </div>
  );
}

function Item({ item, deleteItem, updateitem }) {
  return (
    <li style={{ display: "flex" }}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          updateitem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
