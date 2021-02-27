import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../../components/Contact/Contact";
import { getContacts } from "../../store/actions/contactsActions";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";
import EditContact from "../EditContact/EditContact";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const contactsLoading = useSelector((state) => state.contactsLoading);
  const [showModal, setShowModal] = useState(false);
  console.log(contacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  let contactForm = contacts.map((elem) => {
    return (
      <Contact
        key={elem.id}
        name={elem.name}
        contactDetail={() => {
          setShowModal(true);
        }}
      />
    );
  });
  if (contactsLoading) contactForm = <Spinner />;
  return (
    <div>
      <Modal show={showModal}>
        <EditContact />
      </Modal>
      {contactForm}
    </div>
  );
};

export default ContactsList;
