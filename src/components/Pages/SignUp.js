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

  const submit = (e) => {
    e.preventDefault();
    console.log("FN is: ", firstName, ". LN is: ", lastName, ". @ is: ", email);
  };

  return (
    <div className="SignUp">
      <div className="container">
        <form onSubmit={submit}>
          <h1 className="text-primary">
            SignUp <span>to</span> ShowUp
          </h1>
          <input
            type="name"
            id="name-first"
            placeholder="First Name"
            className="form-field"
            onInput={handleFieldChange}
          />
          <input
            type="name"
            id="name-last"
            placeholder="Last Name"
            className="form-field"
            onInput={handleFieldChange}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="form-field"
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
