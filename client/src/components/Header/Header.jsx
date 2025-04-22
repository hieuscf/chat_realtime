import React from "react";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react"; // hoặc wherever bạn lấy icon từ
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <div className="logo">
          <span>💬</span>
          <span>ChatTiko</span>
        </div>
      </div>
      <nav className="header-navigation">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/features" className="nav-item">
          Features
        </NavLink>
        <NavLink to="/chat" className="nav-item" activeClassName="active">
          Chat
        </NavLink>
        <NavLink to="/upgrade" className="nav-item">
          Upgrade
        </NavLink>
        <NavLink to="/settings" className="nav-item">
          Setting
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>
        <NavLink to="/logout" className="nav-item flex items-center space-x-1">
          <span>Log out</span>
          <LogOut size={16} />
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
