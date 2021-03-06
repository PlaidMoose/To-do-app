import React from "react";

function Todos({ text, todo, todos, setTodos }) {
    //Events
    function deleteHandler () {
        setTodos(todos.filter(el => el.id !== todos.id))
    }
    return (
        <div className="todo">
            <li className='todo-item'>{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todos;