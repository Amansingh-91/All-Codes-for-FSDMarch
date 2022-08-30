import React from "react";
import { createRoot, ReactDom } from "react-dom/client";
// import BookList from "./Booklist";
// import { DisplayList } from "./AdvancedReact/Array-useState";
// import Counter from "./AdvancedReact/Counter-useState";
// import Counter from "./AdvancedReact/MultipleReturn";
// import Counter from "./AdvancedReact/Short-Circuit";
// import App from "./App";
// import App from "./AdvancedReact/RoutesDemo/App";
// import App from "./MUI/MUIDemo";
import App from "./ReduxToolKitDemo";
import { Provider } from "react-redux";
import store from "./store/ReduxToolKit";
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
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
