function reducer(state = [], action) {
    switch (action.type) {
      case 'POPULATE_PRODUCTS':
        return state.concat([action.products]) //in the ToDos list example it was "action.text".. but i am not yet sure what i sure put here
      default:
        return state
    }
  }