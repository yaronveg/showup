import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "./layouts/Header/Header";
import UserProfile from "./Pages/UserProfile";
import SearchResults from "./Pages/SearchResults";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./Pages/Login";

const showUpTheme = createTheme({
  palette: {
    primary: { main: "#6173cf" },
    secondary: { main: "#8158d5" },
    success: { main: "#24bd4a" },
    error: { main: "#bd2424" },
  },
});

function App() {
  const [userData, setUserData] = useState(null);
  const [usersResult, setUsersResult] = useState(null);
  useEffect(() => {
    fetch("/api/users/6223b639a492aa7129eea3dd")
      .then((data) => data.json())
      .then((data) => {
        setUserData(data);
      });
    fetch("/api/users")
      .then((data) => data.json())
      .then((data) => {
        setUsersResult(data);
      });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={showUpTheme}>
        <Routes>
          <Route path="/" element={userData && <Header user={userData} />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route
              path="search"
              element={
                usersResult && <SearchResults usersResult={usersResult} />
              }
            />
            <Route
              path="users/:id"
              element={userData && <UserProfile user={userData} />}
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
