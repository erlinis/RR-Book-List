// The state argument is not related to the application state,
// it reffers only to the reducer state and it goes and returns
// everytime an action occurs and the reducer is called.

// Action is an object like { type: 'BOOK_SELECTED', payload: { title: 'React and Redux'} }
export default function(state=null, action){

  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.book;
  }

  return state;
}
