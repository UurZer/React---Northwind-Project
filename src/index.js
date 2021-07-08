import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { Provider } from "react-redux";
import { configureStore } from "./store/reducers/configureStore";
import "react-toastify/dist/ReactToastify.min.css";
import { _fetchCategories } from "./store/actions/categoryAction";

const store = configureStore();
const _init = [_fetchCategories()];

_init.map((func) => {
  return store.dispatch(func);
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
