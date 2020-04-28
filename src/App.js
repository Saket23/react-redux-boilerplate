import React from "react";
import Container from "./components";
import { Provider } from "react-redux";
import thunkMiddleWare from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import reducer from "./reducers";

const middleWare = [thunkMiddleWare];
const store = createStore(reducer, applyMiddleware(...middleWare));

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
