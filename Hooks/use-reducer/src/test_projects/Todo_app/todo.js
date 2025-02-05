import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Track the index being edited
  const [newEditableInput, setNewEditableInput] = useState(""); // Store edited input

  function addTodos() {
    if (inputValue.trim() === "") return; // Prevent empty todos
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function removeHandler(index) {
    const selectedTodos = todos.filter((_, loopIndex) => loopIndex !== index);
    setTodos(selectedTodos);
  }

  function editHandler(index) {
    setEditIndex(index); // Set the item being edited
    setNewEditableInput(todos[index]); // Pre-fill with existing value
  }

  function saveEdit(index) {
    const updatedTodos = [...todos];
    updatedTodos[index] = newEditableInput; // Update with new value
    setTodos(updatedTodos);
    setEditIndex(null); // Exit edit mode
  }

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        name="input_todo"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={addTodos}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={newEditableInput}
                  onChange={(e) => setNewEditableInput(e.target.value)}
                />
                <button onClick={() => saveEdit(index)}>Save</button>
              </>
            ) : (
              <>
                <li>{todo}</li>
                <button onClick={() => removeHandler(index)}>X</button>
                <button onClick={() => editHandler(index)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
