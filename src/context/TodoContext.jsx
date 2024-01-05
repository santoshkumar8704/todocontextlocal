import { useContext,createContext } from "react";
export const TodoContext = createContext({
    todo : {
        id : 1,
        name : "do this",
        completed : false
    },
    addTodo: (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

})
export const useTodo = () =>  useContext(TodoContext)
export const TodoProvider = TodoContext.Provider