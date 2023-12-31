import React, { useState } from 'react';
import './App.css';
import { AiTwotoneDelete, AiOutlineCheck } from 'react-icons/ai';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Tittle</label>
            <input type="text" placeholder="What is the task title?" />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" placeholder="What is the task description?" />
          </div>
          <div className="todo-input-item">
            <label>Tittle</label>
            <button type="button" className="primaryBtn">
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompleteScreen === false && 'active'}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen === true && 'active'}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Complete
          </button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item">
            <div className="text-container">
              <h3>Task 1</h3>
              <p>Description</p>
            </div>
            <div className="icon-container">
              <AiTwotoneDelete className="icon" />
              <AiOutlineCheck className="check-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
