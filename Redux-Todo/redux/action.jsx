export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO =  'DELETE_TODO'
export const UPDATE_TITLE = "UPDATE_TITLE"
export const MARK_COMPLETE = 'MARK_COMPLETE'
export function updateTitle(title){
    return {type : UPDATE_TITLE , payload : title }
}

export function addTodo(){
    return {type : ADD_TODO }
}
export function deleteTodo(id){
    return {type : DELETE_TODO , payload : id }
}

export function markComplete(id){
    return {type : MARK_COMPLETE , payload : id }
}