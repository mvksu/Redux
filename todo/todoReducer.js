export default function todoReducer(state = [], action) {
    //console.log(state, action)
    switch (action.type) {
        case 'ADD_TODO':
            const newOne = { id: state.length + 1, title: action.payload, done: false }
            return [...state, newOne]
        case 'DELETE_TODO':
            return state.filter(item => item.id !== action.payload)
        case 'UPDATE_TODO':
            return state.map(item => item.id === action.payload.id ? { ...item, title: action.payload.title } : item)
        case 'FINISH_TODO':
            return state.map(item => item.id === action.payload ? { ...item, done: true } : item)
        default:
            return state
    }

}