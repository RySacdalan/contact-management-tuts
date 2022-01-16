import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
import Api from "../Api/Contacts";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //Getting the data from json
  const retrieveContacts = async () => {
    const response = await Api.get("/Contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  //Setting up the data to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  //Adding contact
  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await Api.post("/Contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  //Deleting contact
  const removeContact = async (id) => {
    await Api.delete(`/Contacts/${id}`);
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
