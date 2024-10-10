import React, { useState } from "react";
import Card from "./Card";
import AddIcon from "../assets/add.svg";
import dotIcon from "../assets/3 dot menu.svg";

import P3 from "../assets/Img - High Priority.svg";
import P2 from "../assets/Img - Medium Priority.svg";
import P1 from "../assets/Img - Low Priority.svg";
import P0 from "../assets/No-priority.svg";
import P4 from "../assets/SVG - Urgent Priority colour.svg";

import S0 from "../assets/Backlog.svg";
import S1 from "../assets/To-do.svg";
import S2 from "../assets/in-progress.svg";
import S3 from "../assets/Done.svg";
import S4 from "../assets/Cancelled.svg";

const Display = ({ tickets, users, groupBy, orderBy }) => {
  const groupTickets = (tickets, groupBy) => {
    return tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy] || "0";
      acc[key] = acc[key] ? [...acc[key], ticket] : [ticket];
      return acc;
    }, {});
  };

  const sortTickets = (groupedTickets) => {
    Object.values(groupedTickets).forEach((group) => {
      group.sort((a, b) => {
        if (orderBy === "priority") return b.priority - a.priority;
        if (orderBy === "title") return a.title.localeCompare(b.title);
        return 0;
      });
    });
    return groupedTickets;
  };

  const relatedUser = (userId) => users.find((u) => u.id === userId);

  const groupedTickets = groupTickets(tickets, groupBy);
  const orderedGroupedTickets = sortTickets(groupedTickets);

  const getStatusIcon = (status) => {
    switch (status) {
      case "Todo": return S1;
      case "In Progress": return S2;
      case "Backlog": return S0;
      case "Done": return S3;
      default: return S4;
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 1: return P1;
      case 2: return P2;
      case 3: return P3;
      case 4: return P4;
      default: return P0;
    }
  };

  return (
    <div>
      <div className="Display">
        {Object.keys(orderedGroupedTickets).map((orderKey, index) => (
          <div key={index} className="Display-Horizon">
            <div className="Display2">
              <div className="Display1">
                <div>
                  {groupBy === "status" && (
                    <img
                      src={getStatusIcon(orderKey)}
                      alt="status icon"
                      className="imagDisp1"
                    />
                  )}
                  {groupBy === "priority" && (
                    <img
                      src={getPriorityIcon(Number(orderKey))}
                      alt="priority icon"
                      className="imagDisp1"
                    />
                  )}
                  {groupBy === "userId" && (
                    <img
                      src={`https://api.dicebear.com/5.x/initials/svg?seed=${
                        relatedUser(orderedGroupedTickets[orderKey][0].userId)?.name || "guest"
                      }`}
                      alt="user avatar"
                      className="imagDisp"
                    />
                  )}
                </div>
                <h2>
                  {groupBy === "userId"
                    ? relatedUser(orderKey)?.name || "Unknown"
                    : orderKey}
                </h2>
                <div className="DisplayNum">
                  {orderedGroupedTickets[orderKey].length}
                </div>
              </div>
              <div className="Display1">
                <img src={AddIcon} alt="Add" className="imagDisp1" />
                <img src={dotIcon} alt="Menu" className="imagDisp1" />
              </div>
            </div>

            {orderedGroupedTickets[orderKey].map((ticket) => (
              <Card
                key={ticket.id}
                ticket={ticket}
                user={relatedUser(ticket.userId)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
