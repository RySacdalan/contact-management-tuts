import React from "react";
import avatar from "../Images/avatar-icon.png";
import "./App.css";

const ContactCard = ({ contact, clickHandler }) => {
  const { name, email, id } = contact;
  return (
    <div className="ui celled list">
      <div className="item">
        <img className="ui avatar image" src={avatar} alt="Avatar" />
        <div className="content">
          <div className="header">{name}</div>
          {email}
          <i
            className="trash alternate outline icon"
            onClick={() => clickHandler(id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
