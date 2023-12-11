import React from "react";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀 </em>
      </footer>
    );
  }

  const packedItems =
    items.filter((item) => {
      return item.packed === true;
    }) || [];
  const pourcentage = Math.round((packedItems.length * 100) / items.length);
  return (
    <footer className="stats">
      <em>
        {pourcentage === 100
          ? "You got everything! Ready to go 😀"
          : ` You have ${
              items.length
            } items on your list, and you already packed
            ${packedItems.length} ( ${pourcentage || 0} % )
      `}
      </em>
    </footer>
  );
}
