import React from "react";
//Import Components
import  Todos from './Todo';

const TodoList = ({todos,setTodos}) => {

    return (
        <div className="todo-container">
      <ul className="todo-list">
          {todos.map(todos => (
              <Todos setTodos={setTodos} 
              todos={todos} 
              todo={todo}
              key={todos.id} 
              text = {todos.text}/>
          ))}
      </ul>
    </div>
    );
}


export default TodoList;
