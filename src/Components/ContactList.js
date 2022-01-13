import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h1>Contact List</h1>
      {contacts.map((contact) => {
        return <ContactCard contact={contact} key={contact.id} />;
      })}
    </div>
  );
};

export default ContactList;
