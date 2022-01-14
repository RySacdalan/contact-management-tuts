import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  //Getting the data from the local storage
  //getItem is on top of setItem code block.
  useEffect(() => {
    const getLocalData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getLocalData) setContacts(getLocalData);
  }, []);

  //Setting up the data to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  //Deleting contact
  const removeContact = (id) => {
    const newSetContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newSetContacts);
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} removeContactId={removeContact} />
    </div>
  );
}

export default App;
