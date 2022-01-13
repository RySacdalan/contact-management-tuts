import React from "react";
import "./App.css";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
