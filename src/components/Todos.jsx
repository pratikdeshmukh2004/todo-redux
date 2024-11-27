import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const editing = useSelector((state) => state.editing);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="mt-5 full mx-auto text-left">
        {todos.map((todo) => (
          <li
            className={
              "flex items-center text-lg font-medium justify-between my-2 border p-2 rounded-lg" +
              (editing?.id == todo.id && " animate-pulse bg-rose-200")
            }
            key={todo.id}
          >
            <input
              checked={todo.checked}
              onChange={() =>
                dispatch(updateTodo({ id: todo.id, checked: !todo.checked }))
              }
              type="checkbox"
              className="scale-125 mt-1 accent-rose-500 hover:scale-150 cursor-pointer mx-2"
            />
            {todo.checked ? <s>{todo.text}</s> : todo.text}
            <button
              onClick={() => dispatch(editTodo(todo))}
              className="ml-auto p-1 hover:scale-150 rounded-lg text-white text-xs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="#14b8a6"
              >
                <path d="M 20.455078 4.7519531 C 19.347051 4.7757776 18.202062 5.0893295 17.111328 5.7636719 C 14.890526 7.1361011 12.838975 8.7495765 10.990234 10.566406 C 8.5649573 12.950567 6.8890333 15.898332 5.8632812 19.070312 A 1.0001 1.0001 0 0 0 5.6757812 19.724609 C 5.0803984 21.789935 4.6916746 23.920766 4.7421875 26.107422 C 4.7563305 26.730187 5.2715454 27.244697 5.8945312 27.257812 C 8.0805181 27.308113 10.210713 26.919488 12.275391 26.324219 A 1.0001 1.0001 0 0 0 12.929688 26.136719 C 16.101605 25.110844 19.048028 23.433772 21.431641 21.007812 C 23.249576 19.157965 24.862109 17.106227 26.234375 14.886719 C 28.032621 11.978096 27.264736 8.6944239 25.285156 6.7148438 C 24.295366 5.7250536 22.978936 5.0371209 21.546875 4.8222656 C 21.18886 4.7685518 20.82442 4.7440116 20.455078 4.7519531 z M 20.541016 6.7207031 C 20.796625 6.7147589 21.047429 6.732706 21.292969 6.7714844 C 22.275127 6.9265978 23.165509 7.4233213 23.871094 8.1289062 C 25.282264 9.5400762 25.858957 11.691561 24.533203 13.835938 C 24.461793 13.951431 24.355983 14.039771 24.283203 14.154297 C 22.809995 11.415367 20.586852 9.18791 17.851562 7.7089844 C 17.963773 7.6377404 18.050919 7.5347649 18.164062 7.4648438 C 18.968204 6.9676861 19.774189 6.7385358 20.541016 6.7207031 z M 16.125 9.0644531 C 19.138178 10.456945 21.544591 12.863417 22.929688 15.880859 C 21.993489 17.156927 21.112563 18.479338 20.005859 19.605469 C 18.042935 21.603265 15.661654 23.069064 13.082031 24.023438 C 12.548664 21.426565 10.573434 19.451336 7.9765625 18.917969 C 8.9306698 16.338659 10.395766 13.957421 12.392578 11.994141 C 13.520031 10.886148 14.846417 10.002092 16.125 9.0644531 z M 7.4335938 20.806641 C 9.3891799 21.132294 10.867706 22.61082 11.193359 24.566406 C 9.7647736 24.934212 8.3058475 25.156333 6.8105469 25.189453 C 6.8436669 23.694148 7.0658132 22.235277 7.4335938 20.806641 z"></path>
              </svg>
            </button>
            <button
              className="py-1 px-2 hover:scale-150 rounded-lg text-white text-xs"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="#f43f5e"
              >
                <path d="M29,7.5c0-1.93-1.57-3.5-3.5-3.5H17V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v1H6.5C4.57,4,3,5.571,3,7.5c0,0.553,0.447,1,1,1	s1-0.447,1-1C5,6.673,5.673,6,6.5,6h19C26.327,6,27,6.673,27,7.5S26.327,9,25.5,9c-0.09,0-0.171,0.029-0.254,0.051	c-0.064-0.017-0.122-0.046-0.19-0.049c-0.02-0.001-0.037,0.008-0.056,0.008L25,9H10.989l0.873,16.412	c0.044,0.828-0.591,1.534-1.418,1.578c-0.014,0-0.027,0.001-0.041,0.001c-0.033-0.002-0.065-0.006-0.097-0.009	c-0.078-0.003-0.15-0.025-0.225-0.041C9.41,26.766,8.9,26.179,8.859,25.455L7.998,9.945c-0.03-0.551-0.487-0.973-1.054-0.942	c-0.551,0.03-0.974,0.502-0.942,1.054l0.861,15.511C6.971,27.493,8.565,29,10.493,29h11.014c1.928,0,3.522-1.508,3.63-3.434	l0.811-14.612C27.665,10.732,29,9.277,29,7.5z"></path>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;