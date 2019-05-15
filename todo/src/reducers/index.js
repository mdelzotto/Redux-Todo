import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'

const initialState = {
  todos: [
    {
      id: 1,
      value: 'Do Redux-Todo App',
      completed: false
    },
    {
      id: 2,
      value: 'Walk the dog',
      completed: false
    },
    {
      id: 3,
      value: 'Mow the grass',
      completed: false
    },

    {
      id: 4,
      value: 'Pay bills',
      completed: false
    },
    {
      id: 5,
      value: 'Laundry time',
      completed: false
    },

{
      id: 6,
      value: 'Airport pick-up',
      completed: false
    },
  ]
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case TOGGLE_TODO:
      // USING INDEX
      let toggleTodos = [...state.todos]
      toggleTodos[action.payload].completed=!toggleTodos[action.payload].completed
      return ({...state, todos:toggleTodos})

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => (todo.id !== action.payload) ? todo : '')
      }

    default:
      return state
  }
}
