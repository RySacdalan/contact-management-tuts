import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <div className="ui celled list">
      <h1>Contact List</h1>
      {contacts.map((contact) => {
        return (
          <div className="item" key={contact.id}>
            <div className="content">
              <div className="header">{contact.name}</div>
              {contact.email}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
