import React, { useState } from "react";

function CrudApp() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [insertCount, setInsertCount] = useState(0);
  const maxLength = window.innerWidth <= 768 ? 12 : 44;

  // Function to create a new item
  const handleCreate = () => {
    if (insertCount >= 4) {
      alert("You can only insert up to 4 items.");
      return;
    }
    if (!newItem.trim()) {
      alert("Please enter a non-empty value.");
      return;
    }
    
    setData([...data, newItem]);
    setNewItem("");
    setInsertCount(insertCount + 1);
  };

  // Function to read all items
  const handleRead = () => {
    alert("Items: " + data.join(", "));
  };

  // Function to update an item
  const handleUpdate = (index, newItem) => {
    if (newItem === null) {
      // User canceled the update
      return;
    }
    // Truncate the newItem if it exceeds maxLength
    const truncatedItem = newItem.slice(0, maxLength);
    const updatedData = [...data];
    updatedData[index] = truncatedItem.toLowerCase().trim();
    setData(updatedData);
  };

  // Function to delete an item
  const handleDelete = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
    setInsertCount(insertCount - 1);
  };

  return (
    <div className="crud-app">
      <p className="mb-3 text-center description">This is a CRUD application to simulate managing a list of items.</p>
      <div className="container">
        <div className="row border shadow rounded p-2">
          <div className="col-md-12 mb-3">
            <ul className="list-group border bg-light rounded shadow-sm">
              {data.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span translate="no">{item}</span>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm me-1"
                      onClick={() => handleUpdate(index, prompt("Update item:", item))}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-12">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="newItem"
                  value={newItem}
                  placeholder="Enter a new item"
                  maxLength={maxLength}
                  onChange={(e) => setNewItem(e.target.value.toLowerCase().trim())}
                />
              </div>
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-success" onClick={handleCreate}>
                  Create
                </button>
                <button type="button" className="btn btn-info" onClick={handleRead}>
                  Read
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrudApp;
