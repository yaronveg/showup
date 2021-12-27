import React from "react";
import "./style.css";
import Header from "./components/Header/Header";
import UserProfile from "./components/Pages/UserProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <UserProfile />
      {/* <SearchResuls/> */}
    </div>
  );
}

export default App;
