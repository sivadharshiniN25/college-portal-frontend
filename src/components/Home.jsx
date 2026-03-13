import "./Home.css";
import Stud_grid from "./Stud_grid";

export default function Home(){

return(

<div className="home">

<h1>College Management Portal</h1>

<p>
Manage students and staff efficiently with a modern dashboard.
Use the sidebar to navigate between modules.
</p>

<div className="homeCards">

<div className="card">
<h3>Student Dashboard</h3>
<p>View, search and manage students.</p>
</div>

<div className="card">
<h3>Staff Dashboard</h3>
<p>View and manage staff information.</p>
</div>

</div>

</div>

)

}