import React from "react";

const Sidebar = ({ links, onLinkClick }) => {
  return (
    <div className="sidebar">
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <button onClick={() => onLinkClick(link.title)}>
              {link.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
