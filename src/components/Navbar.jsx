import React, { useState } from "react";
import DisplayLogo from "../assets/Display.svg";
import DownLogo from "../assets/down.svg";

const Navbar = ({ groupBy, orderBy, onGroupByChange, onOrderByChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleGroupByChange = (e) => {
    onGroupByChange(e.target.value);
    setDropdownOpen(false);
  };

  const handleOrderByChange = (e) => {
    onOrderByChange(e.target.value);
    setDropdownOpen(false);
  };

  return (
    <div className="NavContainer">
      <div className="NavDisTab" onClick={toggleDropdown}>
        <img src={DisplayLogo} alt="Display" />
        <div>Display</div>
        <img src={DownLogo} alt="Toggle dropdown" />
      </div>
      {isDropdownOpen && (
        <div className="NavAbsolute">
          <div className="NavAbsolute1">
            <div>Grouping</div>
            <select
              className="selectCustom"
              value={groupBy}
              onChange={handleGroupByChange}
            >
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="NavAbsolute1">
            <div>Ordering</div>
            <select
              className="selectCustom"
              value={orderBy}
              onChange={handleOrderByChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
