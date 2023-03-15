import {
  FaWindowClose,
  FaHome,
  FaFileAlt,
  FaUserFriends,
  FaRegCalendarAlt,
  FaFile,
} from "react-icons/fa";
import logo from "./assets/logo.svg";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useGlobalContext();

  return (
    <div className={`${sidebarOpen ? " sidebar-active" : "sidebar"}`}>
      <div className="first">
        <div className="logo">
          <img src={logo} alt="" className="img" />
        </div>
        <div className="sidebar-close">
          <FaWindowClose
            className="sidebar-close-icon"
            onClick={() => {
              setSidebarOpen(false);
            }}
          />
        </div>
      </div>
      <div className="middle">
        <ul className="menus">
          <li>
            <FaHome className="icon" /> Home
          </li>
          <li>
            <FaUserFriends className="icon" /> team
          </li>
          <li>
            <FaFileAlt className="icon" /> projects
          </li>
          <li>
            <FaRegCalendarAlt className="icon" /> calendar
          </li>
          <li>
            <FaFile className="icon" /> documents
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
