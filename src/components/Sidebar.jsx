import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar(){

return(

<div className="sidebar">

<div className="logo">

<img 
src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
alt="portal logo"
/>

<h2>College Portal</h2>

</div>

<div className="menu">

<Link to="/student-dashboard">Student Dashboard</Link>

<Link to="/staff-dashboard">Staff Dashboard</Link>

</div>

<div className="sidebarFooter">

<p>College Portal</p>
<p>v1.0</p>

</div>

</div>

)

}