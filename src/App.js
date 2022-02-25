import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "./components/Header/Header";
import UserProfile from "./Pages/UserProfile";
import SearchResults from "./Pages/SearchResults";
import { Route, Routes } from "react-router-dom";
// import SignUp from "./Pages/SignUp";

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
      {userData && <Header user={userData} />}
      <Routes>
        <Route
          path="/"
          element={usersResult && <SearchResults usersResult={usersResult} />}
        />
        <Route
          path="/users/:id"
          element={userData && <UserProfile user={userData} />}
        />
      </Routes>

      {/* <SignUp /> */}
    </div>
  );
}

export default App;
