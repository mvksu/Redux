export const addTodo = (title) => ({ type: 'ADD_TODO', payload: title })
export const delTodo = (id) => ({ type: 'DELETE_TODO', payload: id })
export const updateTodo = (id, title) => ({ type: 'UPDATE_TODO', payload: { id: id, title: title}}) 
export const finishTodo = (id) => ({ type: 'FINISH_TODO', payload: id })


// store.dispatch({ type: 'ADD_TODO', payload: 'todo1' })
// store.dispatch({ type: 'ADD_TODO', payload: 'todo2' })
// store.dispatch({ type: 'ADD_TODO', payload: 'todo3' })
// store.dispatch({ type: 'DELETE_TODO', payload: 3 })
// store.dispatch({ type: 'UPDATE_TODO', payload: { id: 1, title: 'updatedTitle'}})
// store.dispatch({ type: 'FINISH_TODO', payload: 1 })