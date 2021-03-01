import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../../components/Contact/Contact";
import {
  getContacts,
  getSingleContact,
} from "../../store/actions/contactsActions";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";
import EditContact from "../EditContact/EditContact";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const singleContact = useSelector((state) => state.singleContact);

  const [editContact, setEditContact] = useState({
    email: "1",
    phone: "1",
    name: "1",
  });

  const contactsLoading = useSelector((state) => state.contactsLoading);
  const [showModal, setShowModal] = useState(false);
  console.log(contacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const getContactsById = (idContact) => {
    dispatch(getSingleContact(idContact));
    setShowModal(true);
  };

  let contactForm = contacts.map((elem) => {
    return (
      <Contact
        key={elem.id}
        name={elem.name}
        contactDetail={() => getContactsById(elem.id)}
      />
    );
  });
  if (contactsLoading) contactForm = <Spinner />;
  return (
    <div>
      <Modal show={showModal}>
        <EditContact
          email={singleContact.email}
          name={singleContact.name}
          phone={singleContact.phone}
        />
      </Modal>
      {contactForm}
    </div>
  );
};

export default ContactsList;
