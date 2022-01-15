import React from "react";
import "./style.css";
import Header from "./components/Header/Header";
// import UserProfile from "./components/Pages/UserProfile";
// import SearchResults from "./components/Pages/SearchResults";
import SignUp from "./components/Pages/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <UserProfile /> */}
      {/* <SearchResults /> */}
      <SignUp />
    </div>
  );
}

export default App;
