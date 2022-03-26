import { useState } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { SuSnackbar } from "../components/SuSnackbar/SuSnackbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState({
    message: "",
    theme: "success",
    isOpen: false,
  });
  const handleFieldChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        console.log("field change triggered. field not recognized.");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    // TODO: improve signup form validations:
    // make sure email fits email REGEX template
    if (email === "") {
      setSnackbar({
        message: "Missing email field",
        theme: "error",
        isOpen: true,
      });
    } else if (password === "") {
      setSnackbar({
        message: "Missing password field",
        theme: "error",
        isOpen: true,
      });
    } else {
      // TODO: modify request options to fit login
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      };

      try {
        const response = await fetch("/api/login", requestOptions);
        const responseJson = await response.json();
        const responseStatus = responseJson.status;
        console.log("response status! ", responseJson);
        if (responseStatus === 409) {
          setSnackbar({
            message: responseJson.message,
            theme: "error",
            isOpen: true,
          });
        } else if (responseStatus === 200) {
          console.log("login successful: ", responseJson);
          document.cookie = `token=${responseJson.token}`;
          // dispatch(login(userId? ))
          setSnackbar({ message: "Sign-up successfull!!", isOpen: true });
        }
      } catch (e) {
        setSnackbar({
          message: "Server error, logged to console",
          theme: "error",
          isOpen: true,
        });
        console.log(" Server error: ", e);
      }
    }
    // TODO: better sollution to snackbar timeout, and reset
    setTimeout(() => {
      setSnackbar({ isOpen: false });
    }, 3600);
  };

  return (
    <div className="Login Signup">
      <SuSnackbar
        openCall={snackbar.isOpen}
        message={snackbar.message}
        theme={snackbar.theme}
      />
      <div className="container">
        <form onSubmit={submit}>
          <h1 className="text-primary text-a-c">Login</h1>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onInput={handleFieldChange}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            onInput={handleFieldChange}
          />

          <div className="form-actions">
            Don't have an acount yet? <Link to="/signup">Sign up</Link>
            <button type="submit" className="btn btn-primary">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
