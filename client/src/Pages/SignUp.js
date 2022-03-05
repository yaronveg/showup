import { Alert, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { SuSnackbar } from "../components/SuSnackbar/SuSnackbar";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [snackMessage, setSnackMessage] = useState("");
  const [snackTheme, setSnackTheme] = useState("success");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFieldChange = (e) => {
    switch (e.target.id) {
      case "name-first":
        setFirstName(e.target.value);
        break;
      case "name-last":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirm-password":
        setConfirmPassword(e.target.value);
        break;
      default:
        console.log("field change triggered. field not recognized.");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    // TODO: signup VALIDATION MISSING, make sure to improve "passwords don't match" validation

    if (password === confirmPassword) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      };

      // TODO: form try-catch and notifications
      const response = await fetch("/api/users", requestOptions);
      const responseJson = response.json();
      console.log("response JSON: ", responseJson);
      setSnackMessage("Sign-up successfull!!");
      setOpenSnackbar(true);
    } else {
      setSnackMessage("Passwords don't match");
      setSnackTheme("error");
      setOpenSnackbar(true);
      console.log("");
    }
  };
  return (
    <div className="SignUp">
      <SuSnackbar
        openCall={openSnackbar}
        message={snackMessage}
        theme={snackTheme}
      />
      <div className="container">
        <form onSubmit={submit}>
          <h1 className="text-primary text-a-c">
            SignUp <span>to</span> ShowUp
          </h1>
          <TextField
            id="name-first"
            label="First Name"
            variant="outlined"
            onInput={handleFieldChange}
          />
          <TextField
            id="name-last"
            label="Last Name"
            variant="outlined"
            onInput={handleFieldChange}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onInput={handleFieldChange}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            onInput={handleFieldChange}
          />
          <TextField
            id="confirm-password"
            label="Confirm Password"
            variant="outlined"
            onInput={handleFieldChange}
          />
          <div className="form-actions">
            <a href="#login">Already have an acount?</a>
            <button type="submit" className="btn btn-primary">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
