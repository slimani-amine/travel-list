import { useEffect, useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);
  const addItems = (item) => {
    setItems([...items, item]);
  };
  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const updateitem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const clearItems = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form addItems={addItems} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        updateitem={updateitem}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
