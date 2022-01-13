import React from "react";
import "./App.css";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const contacts = [
    {
      id: 1,
      name: "Ryan Sacdalan",
      email: "ryan@gmail.com",
    },
    {
      id: 2,
      name: "Christian Sacdalan",
      email: "christian@gmail.com",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
