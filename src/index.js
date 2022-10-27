import ReactDom from "react-dom/client";
import React from "react";

const App = () => {
  return <h1>This is my React App</h1>;
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
