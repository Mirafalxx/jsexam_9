import React from "react";
import "./AddContactForm.css";

const AddContactForm = ({ name, phone, email, change, saveContact, back }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={change}
        />
        <input
          type="number"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={change}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={change}
        />
        <button onClick={saveContact}>Save</button>
        <button onClick={back}>Back to contacts</button>
      </form>
    </div>
  );
};

export default AddContactForm;
