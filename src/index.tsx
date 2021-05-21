import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "../src/app/App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "app/store/index";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/styles/layout.less";
// import "./index.css";

// React.StrictMode 指的是严格模式
// 识别不安全的生命周期组件
// 有关旧式字符串ref用法的警告
// 关于使用废弃的 findDOMNode 方法的警告
// 检测意外的副作用
// 检测过时的 context API

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
