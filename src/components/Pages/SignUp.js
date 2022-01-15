// import * as React from "react";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

export default function SignUp() {
  return (
    <div className="SignUp">
      <TextField
        type="text"
        id="name-first"
        label="First Name"
        variant="outlined"
      ></TextField>
      <TextField
        type="text"
        id="name-last"
        label="Last Name"
        variant="outlined"
      ></TextField>
      <TextField
        type="email"
        id="email"
        label="Email"
        variant="outlined"
      ></TextField>
    </div>
  );
}
