import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/aim">Aim</Link>
      <Link to="/theory">Theory</Link>
      <Link to="/procedure">Procedure</Link>
    </div>
  );
}

export default Sidebar;
