let counter = document.querySelector("h1");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let reset = document.querySelector(".reset");

// Reducer
function reducer(state = 0, action) {
  // Action required to change the state.
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

// Creating store to store the state.
let store = Redux.createStore(reducer);
console.log(store, "seeing the store...");

// Function to render onto the view.
function render() {
  counter.innerHTML = store.getState();
}

store.subscribe(render);

increment.addEventListener("click", function () {
  store.dispatch({ type: "increment" });
});

decrement.addEventListener("click", function () {
  store.dispatch({ type: "decrement" });
});

reset.addEventListener("click", function () {
  store.dispatch({ type: "reset" });
});
