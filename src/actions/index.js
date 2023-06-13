export const addTodo=(data)=>{
    return{
        type:"Add_Todo",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo=(id)=>{
    return{
        type:"Delete_Todo",
        id
    }
}

export const removeTodo=()=>{
    return{
        type:"Remove_Todo"
    }
}