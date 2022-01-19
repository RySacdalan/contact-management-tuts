import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import "./App.css";

const ContactList = ({
  contacts,
  removeContactId,
  searchTerm,
  searchKeyword,
}) => {
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

  const inputElement = useRef("");
  const getSearchTerm = () => {
    searchKeyword(inputElement.current.value);
  };

  return (
    <div className="main">
      <h1>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h1>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputElement}
            type="text"
            placeholder="Search Contact"
            className="prompt"
            value={searchTerm}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div>{renderContactList}</div>
    </div>
  );
};

export default ContactList;
