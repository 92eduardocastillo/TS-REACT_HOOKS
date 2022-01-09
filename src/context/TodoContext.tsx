import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";


export type TodoContectProps = {
    todoState: TodoState;
    toggleTodo: ( id: string ) => void;
}

export const TodoContext = createContext<TodoContectProps>({} as TodoContectProps);