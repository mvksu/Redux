//const Redux = require('redux')
import * as Redux from 'redux'
import todoReducer from './todo/todoReducer.js'
import notesReducer from './notes/notesReducer.js'
import { addTodo, delTodo, finishTodo, updateTodo } from './todo/todoActions.js'
import { addNote, delNote } from './notes/notesActions.js'

const reducer = Redux.combineReducers({ todo: todoReducer, notes: notesReducer })
let store = Redux.createStore(reducer)
store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('todo1'))
store.dispatch(addTodo('todo2'))
store.dispatch(addTodo('todo3'))
store.dispatch(delTodo(3))
store.dispatch(updateTodo(1, 'updatedTitle'))
store.dispatch(finishTodo(1))
store.dispatch(addNote('content1'))
store.dispatch(addNote('content2'))
store.dispatch(addNote('content3'))
store.dispatch(delNote(1))



