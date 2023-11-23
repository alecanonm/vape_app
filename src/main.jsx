import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ApolloProvider from "./providers/ApolloProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
