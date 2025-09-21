import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos: [
        {
            id: 1,
            todo: "Todo message",
            completed: false
        }
    ],
    addTodo : () => {},
    updateTodo : () => {},
    deleteTodo : () => {},
    toggleComplete : () => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
