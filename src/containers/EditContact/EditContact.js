import React from "react";
import "./EditContact.js";

const EditContact = ({ email, name, phone }) => {
  return (
    <div>
      <input value={email} />
      <input value={name} />
      <input value={phone} />
    </div>
  );
};

export default EditContact;
