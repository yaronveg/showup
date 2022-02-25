import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "./components/Header/Header";
// import UserProfile from "./components/Pages/UserProfile";
import SearchResults from "./components/Pages/SearchResults";
// import SignUp from "./components/Pages/SignUp";

function App() {
  const [userData, setUserData] = useState(null);
  const [usersResult, setUsersResult] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/api/users/61fd846eef6febfc4e212bf7")
      .then((data) => data.json())
      .then((data) => {
        setUserData(data);
      });
    fetch("http://localhost:8000/api/users")
      .then((data) => data.json())
      .then((data) => {
        setUsersResult(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      {/* {userData && <UserProfile user={userData} />} */}
      {usersResult && <SearchResults usersResult={usersResult} />}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
