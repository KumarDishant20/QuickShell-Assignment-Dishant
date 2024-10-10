import React from "react";
import p1 from "../assets/Img - High Priority.svg";
import p2 from "../assets/Img - Medium Priority.svg";
import p3 from "../assets/Img - Low Priority.svg";
import p4 from "../assets/No-priority.svg";
import p0 from "../assets/SVG - Urgent Priority colour.svg";

const Card = ({ ticket, user }) => {
  const name = user[0]?.name || "guest"; // Using optional chaining for safety
  const priorityImg = 
    ticket.priority > 3 ? p0 : 
    ticket.priority > 2 ? p1 : 
    ticket.priority > 1 ? p2 : 
    ticket.priority === 0 ? p4 : p3;

  return (
    <div className="TicketCard">
      <div className="Card1">
        <div>{ticket.id}</div>
        <div>
          <img
            src={`https://api.dicebear.com/5.x/initials/svg?seed=${name}`}
            alt="user logo"
            className="imag"
          />
        </div>
      </div>
      <div className="CardTitle">{ticket.title}</div>
      <div className="Card2">
        <div className="C2">
          <img src={priorityImg} alt="priority" />
        </div>
        <div className="C3">
          <div className="cardCircle"></div>
          <div>{ticket.tag[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
