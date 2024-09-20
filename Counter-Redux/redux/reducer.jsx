const initValue = {
    count: 0
}
export const reducer = (state = initValue, { type }) => {
    switch (type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case "DECREMENT":
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}