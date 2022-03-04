import { TextField } from "@mui/material";
import { useState } from "react";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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
      default:
        console.log("field change triggered. field not recognized.");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    // TODO: signup VALIDATION MISSING

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email }),
    };

    // TODO: form try-catch and notifications
    const response = await fetch("/api/users", requestOptions);
    const responseJson = response.json();
    console.log("response JSON: ", responseJson);
  };

  return (
    <div className="SignUp">
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
