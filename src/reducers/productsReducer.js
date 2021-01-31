function reducer(state = [], action) {
    switch (action.type) {
      case 'POPULATE_PRODUCTS':
        return state.concat([action.products]) //action.text in todoslist example
      default:
        return state
    }
  }