import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CartReducer from "./Component/Reducer/CartReducer";
import "./Assets/Style.css";
import "./Assets/bootstrap.min.css";
 
// ReactDOM.render(
//   <Main/>, 
//   document.getElementById("root")
// );

const store = createStore(CartReducer);
 
ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));