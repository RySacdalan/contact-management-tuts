import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, removeContactId }) => {
  const deleteContact = (id) => {
    removeContactId(id);
  };

  return (
    <div>
      <h1>Contact List</h1>
      {contacts.map((contact) => {
        return (
          <ContactCard
            contact={contact}
            key={contact.id}
            clickHandler={deleteContact}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
