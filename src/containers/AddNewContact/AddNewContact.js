import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddContactForm from "../../components/AddContactForm/AddContactForm";
import { addContact } from "../../store/actions/contactsActions";

const AddNewContact = (props) => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createContact = (e) => {
    e.preventDefault();
    dispatch(addContact(contact));
    setContact({ name: "", email: "", phone: "" });
    props.history.push("/");
  };

  return (
    <div>
      <AddContactForm
        change={handleChange}
        saveContact={createContact}
        name={contact.name}
        email={contact.email}
        phone={contact.phone}
      />
    </div>
  );
};

export default AddNewContact;
