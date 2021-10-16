export default function notesReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, { id: state.length + 1, content: action.payload}]
        case 'DELETE_NOTE':
            return state.filter(x => x.id !== action.payload)
        default:
            return state
    }
}