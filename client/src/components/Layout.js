/*import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiCloseCircleFill, RiNotificationLine } from "react-icons/ri";
import {
  RiHome2Fill,
  RiFile2Fill,
  RiHospitalFill,
  RiProfileFill,
  RiLogoutBoxFill,
} from "react-icons/ri";
import { useSelector } from "react-redux";

import "../Layout.css";

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.userData) || {};
  const location = useLocation();

  const userMenu = [
    { name: "Home", path: "/", icon: RiHome2Fill },
    { name: "Appoint", path: "/appointments", icon: RiFile2Fill },
    { name: "Apply doctor", path: "/apply-doctor", icon: RiHospitalFill },
    { name: "Profile", path: "/profile", icon: RiProfileFill },
    { name: "Logout", path: "/logout", icon: RiLogoutBoxFill },
  ];
 
  const menuItems = userMenu.map((menu, index) => {
    const isactive = location.pathname === menu.path;
    const Icon = menu.icon;
    return (
      <Link key={index} to={menu.path}>
        <div className={`d-flex menu-item ${isactive && "active-menu-item"}`}>
          {collapsed ? (
            <Icon className="ri-icon" />
          ) : (
            <div className="d-flex">
              <Icon className="ri-icon" />
              <span>{menu.name}</span>
            </div>
          )}
        </div>
      </Link>
    );
  });

  return (
    <div className="main">
      <div className="d-flex layout">
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <div className="sidebar-header">
            <h3>SEVA</h3>
          </div>
          <div className="menu">{menuItems}</div>
        </div>
        <div className="content">
          <div className="header">
            <RiCloseCircleFill
              className="close-icon"
              onClick={() => setCollapsed(!collapsed)}
            />
            <div className="d-flex">
              <RiNotificationLine className="layout-action-icon" />
              {user && <Link to="/profile">{user.name}</Link>}
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;*/
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiCloseCircleFill, RiNotificationLine } from "react-icons/ri";
import {
  RiHome2Fill,
  RiFile2Fill,
  RiHospitalFill,
  RiProfileFill,
  RiLogoutBoxFill,
} from "react-icons/ri";
import { useSelector } from "react-redux";

import "../Layout.css";

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.userData) || {};
  const location = useLocation();

  const userMenu = [
    { name: "Home", path: "/", icon: RiHome2Fill },
    { name: "Appoint", path: "/appointments", icon: RiFile2Fill },
    { name: "Apply doctor", path: "/apply-doctor", icon: RiHospitalFill },
    { name: "Profile", path: "/profile", icon: RiProfileFill },
    { name: "Logout", path: "/logout", icon: RiLogoutBoxFill },
  ];

  const menuItems = userMenu.map((menu, index) => {
    const isactive = location.pathname === menu.path;
    const Icon = menu.icon;
    return (
      <Link key={index} to={menu.path}>
        <div className={`d-flex menu-item ${isactive && "active-menu-item"}`}>
          {collapsed ? (
            <Icon className="ri-icon" />
          ) : (
            <div className="d-flex">
              <Icon className="ri-icon" />
              <span>{menu.name}</span>
            </div>
          )}
        </div>
      </Link>
    );
  });

  return (
    <div className="main">
      <div className="d-flex layout">
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <div className="sidebar-header">
            <h3>SEVA</h3>
          </div>
          <div className="menu">{menuItems}</div>
        </div>
        <div className="content">
          <div className="header">
            <RiCloseCircleFill
              className="close-icon"
              onClick={() => setCollapsed(!collapsed)}
            />
            <div className="d-flex">
              <RiNotificationLine className="layout-action-icon" />
              {user && <Link to="/profile">{user.name}</Link>}
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
