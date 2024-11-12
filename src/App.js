import React from "react";
import ReactDOM from "react-dom";
// import AdminPanelForm from "./AdminPanelForm";
import "./i18n"; // Ensure i18n is imported
// import KeyDown from "./KeyDown";
import Auth from "./Auth";

const App = () => {
  return (
    <div>
      {/* <h1>Admin Panel</h1> */}
      {/* <AdminPanelForm /> */}
      {/* <KeyDown /> */}
      <Auth />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
