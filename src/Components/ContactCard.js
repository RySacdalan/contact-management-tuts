import React from "react";
import avatar from "../Images/avatar-icon.png";
import { Link } from "react-router-dom";
import "./App.css";

const ContactCard = (props) => {
  const { name, email, id } = props.contact;
  return (
    <div className="ui celled list">
      <div className="item">
        <img className="ui avatar image" src={avatar} alt="Avatar" />
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
          <i
            className="trash alternate outline icon"
            onClick={() => props.clickHandler(id)}
            style={{ color: "red" }}
          ></i>
          <Link to={{ pathname: "/edit", state: { contact: props.contact } }}>
            <i
              className="edit alternate outline icon"
              style={{ color: "green" }}
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
