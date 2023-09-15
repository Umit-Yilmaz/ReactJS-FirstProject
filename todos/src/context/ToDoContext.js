import React, {createContext, useContext, useState} from "react";

const ToDoContext = createContext();

export const ToDoProvider = ({children}) => {
    const [todos, setToDos] = useState([
        {
            id:1,
            text:"Learn React",
            completed:false,
        }
    ])


const values = {
    todos,
    setToDos,
};

return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export const useToDo =() =>{
    const context = useContext({ToDoContext});
    if (context === undefined){
        throw new Error("useTodo hook error")
    
    }
    return context;
};