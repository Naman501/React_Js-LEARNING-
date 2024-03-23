import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos: [{id:1,text:"Hello World"}]
}

// function sayHello(){
//     console.log("Hello");

// }

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodos: (state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id != action.payload)
        }
        }
})

export const {AddTodos,removeTodo}=todoSlice.actions

export default todoSlice.reducer