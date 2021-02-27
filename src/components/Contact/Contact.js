import React from "react";
import "./Contact.css";

const Contact = ({ name, contactDetail }) => {
  return (
    <div onClick={contactDetail} className="contactItem">
      <p>{name}</p>
    </div>
  );
};

export default Contact;
