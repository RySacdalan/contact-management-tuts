import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, removeContactId }) => {
  const deleteContact = (id) => {
    removeContactId(id);
  };

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHandler={deleteContact}
      />
    );
  });

  return (
    <div className="main">
      <h1>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h1>
      <div>{renderContactList}</div>
    </div>
  );
};

export default ContactList;
