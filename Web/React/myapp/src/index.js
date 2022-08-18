import React from "react";
import { createRoot, ReactDom } from "react-dom/client";
// import BookList from "./Booklist";
// import { DisplayList } from "./AdvancedReact/Array-useState";
// import Counter from "./AdvancedReact/Counter-useState";
import Counter from "./AdvancedReact/MultipleReturn";
// import App from "./App";
// css
import "./index.css";
// First Component
// Jsx Rules
// always return single element
// use camelCase for html attrbutes
//
// vars

// const Demo = () => {
//   return <h1>{["aman", "john"]}</h1>;
// };

const root = createRoot(document.getElementById("root"));
// root.render(<BookList />);
// root.render(<Demo />);
root.render(<Counter />);
