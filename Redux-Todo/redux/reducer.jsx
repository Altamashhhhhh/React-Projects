const todo = {
    title: "",
    status: false,
    id: Date.now(),
    todos: []

}

export const reducer = (state = todo, { type, payload }) => {
    switch (type) {
        case "UPDATE_TITLE":
            return { ...state, title: payload }
        case "ADD_TODO": {
            const newTodo = { title: state.title, status: false, id: Date.now() };
            return { ...state, todos: [...state.todos, newTodo], title: "" }
        }
        case "DELETE_TODO": {
            const deletedTodo = state.todos.filter(item => {
                return item.id !== payload
            })
            return { ...state, todos: deletedTodo }
        }
        case "MARK_COMPLETE": {
            const updatedTodo = state.todos.map(item => (
                item.id === payload ? {
                    ...item , status : !item.status
                } : item
            ))
            return { ...state, todos: updatedTodo }
        }
        default:
            return state;
    }

}