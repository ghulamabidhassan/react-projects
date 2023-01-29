import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import List from "./List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, title: "", type: "" });
  const [name, setName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (!name || name.trim() === "") {
      alertHandler(true, "please enter a value", "danger");
    } else if (name && isEdit) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      alertHandler(true, "Items edited successfully", "success");
      setName("");
      setEditId(null);
      setIsEdit(false);
    } else {
      alertHandler(true, "Items Added to the List", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const clearItems = () => {
    alertHandler(true, "Items removed", "danger");
    setList([]);
    setName("");
  };

  const alertHandler = (show = false, title = "", type = "") => {
    setAlert({ show, title, type });
  };

  const removeItem = (id) => {
    alertHandler(true, "Item removed", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    alertHandler(true, "Item to be edited", "danger");
    setIsEdit(true);
    const specificItem = list.find((item) => item.id === id);
    setEditId(specificItem.id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <header>
            {alert.show && (
              <Alert alert={alert} list={list} alertHandler={alertHandler} />
            )}
            <h2 className="heading">grocery bud</h2>
            <div className="inputs">
              <input
                value={name}
                onChange={handleInput}
                placeholder="e.g. eggs"
                type="text"
              />
              <button onClick={handleSubmit} className="btn submit">
                {isEdit ? "edit" : "submit"}
              </button>
            </div>
          </header>
          {list.length > 0 && (
            <>
              <section className="lists">
                <List editItem={editItem} removeItem={removeItem} list={list} />
              </section>
              <div className="clear-btn">
                <button onClick={clearItems} className="clear">
                  clear items
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
