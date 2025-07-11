import { useState } from "react";
import Input from "./Input";
import "../styles/GeneralInfo.css";

export default function GeneralInfo() {
  const [information, setInformation] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "email@email.com",
    phone: "555-555-5555",
  });

  const fullName = information.firstName + " " + information.lastName;

  const [isEditing, setIsEditing] = useState(false);

  function handleFirstNameChange(e) {
    setInformation({ ...information, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    setInformation({ ...information, lastName: e.target.value });
  }

  function handleEmailChange(e) {
    setInformation({ ...information, email: e.target.value });
  }

  function handlePhoneChange(e) {
    setInformation({ ...information, phone: e.target.value });
  }

  function handleClick() {
    setIsEditing(!isEditing);
  }

  return (
    <>
      <div className="header-row">
        <h2>General Information</h2>
        <button onClick={handleClick}>{isEditing ? "Submit" : "Edit"}</button>
      </div>
      {isEditing ? (
        <div className="form-fields">
          <Input
            label="First Name"
            value={information.firstName}
            onChange={handleFirstNameChange}
          />
          <Input
            label="Last Name"
            value={information.lastName}
            onChange={handleLastNameChange}
          />
          <Input
            label="E-mail"
            value={information.email}
            onChange={handleEmailChange}
          />
          <Input
            label="Phone"
            value={information.phone}
            onChange={handlePhoneChange}
          />
        </div>
      ) : (
        <div className="display-container">
          <h3>{fullName} </h3>
          <h3>{information.email}</h3>
          <h3>{information.phone} </h3>
        </div>
      )}
    </>
  );
}
