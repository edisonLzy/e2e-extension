import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'virtual:uno.css'

const root = document.createElement('div');
root.id = 'e2e-extension-root';
document.body.append(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);