// import * as React from "react";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

export default function SignUp() {
  return (
    <div className="SignUp">
      <div className="container">
        <h1 className="text-primary">
          SignUp <span>to</span> ShowUp
        </h1>
        {/* <TextField
          type="text"
          id="name-first"
          label="First Name"
          variant="outlined"
          className="form-field"
        ></TextField> */}
        <input
          type="name"
          id="name-first"
          placeholder="First Name"
          className="form-field"
        />
        <input
          type="name"
          id="name-last"
          placeholder="Last Name"
          className="form-field"
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="form-field"
        />
        <div className="form-actions">
          <a href="#login">Already have an acount?</a>
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
