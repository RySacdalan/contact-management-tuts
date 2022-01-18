import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContact from "./EditContact";
import Header from "./Header";
import Api from "../Api/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      console.log(allContacts);
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  //Setting up the data to local storage
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
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

  //Updating a contact
  const updateContactHandler = () => {};

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
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                removeContactId={removeContact}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
          {/* <Route path={(`/contacts/${id}`, (component = { ContactDetail }))} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
