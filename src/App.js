import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "./components/Header/Header";
import UserProfile from "./components/Pages/UserProfile";
// import SearchResults from "./components/Pages/SearchResults";
// import SignUp from "./components/Pages/SignUp";

function App() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/api/users/61fd846eef6febfc4e212bf7").then(
      (data) => {
        setUserData(data);
      }
    );
  }, []);

  return (
    <div className="App">
      <Header />
      {userData && <UserProfile user={userData} />}
      {/* <SearchResults /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
