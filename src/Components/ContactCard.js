import React from "react";
import avatar from "../Images/avatar-icon.png";

const ContactCard = ({ contact }) => {
  const { name, email } = contact;
  return (
    <div className="ui celled list">
      <div className="item">
        <img className="ui avatar image" src={avatar} alt="Image" />
        <div className="content">
          <div className="header">{name}</div>
          {email}
          <i
            className="trash alternate outline icon"
            style={{ color: "red", marginLeft: "10px" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
