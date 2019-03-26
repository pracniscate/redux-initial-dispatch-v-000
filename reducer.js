// start undefined
let state;

// when passing a state of undefined, assign that value to initial state
function changeState(state = { count: 0 }, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.setInnerHtml = state.counter
}

// start at 0
dispatch({ type: '@@INIT' })
