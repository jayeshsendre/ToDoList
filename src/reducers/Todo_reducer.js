const initialData={
    list:[]
}

const todoreducer =(state=initialData,action)=>{
    switch (action.type) {
        case "Add_Todo":
            
            const{id,data}=action.payload;

            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case "Delete_Todo":
            
            const newList=state.list.filter((elem)=>elem.id !== action.id)

            return{
                ...state,
                list:newList
            }  
        case "Remove_Todo":
            return{
                ...state,
                list:[]
            }      
        default: return state;    
    }
}

export default todoreducer
