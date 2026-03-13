import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Stud_grid from "./components/Stud_grid";
import Stud_table from "./components/Stud_table";
import StudRegform from "./components/StudRegForm";

import Staff_grid from "./components/Staff_grid";
import Staff_table from "./components/Staff_table";
import StaffRegForm from "./components/StaffRegForm";

import Home from "./components/home";
import Contact from "./components/Contact";
import About from "./components/about";

import "./App.css";

export default function App(){

const [view,setView] = useState("grid")
const [search,setSearch] = useState("")

const[students,setStudents] = useState([])
const[staff,setStaff] = useState([])

useEffect(()=>{

fetch("http://localhost:8080/api/student")
.then(res=>res.json())
.then(data=>{
setStudents(data)
})

fetch("http://localhost:8080/api/staff")
.then(res=>res.json())
.then(data=>{
setStaff(data)
})

},[])

const filteredStudents = students.filter((s)=>
s.name?.toLowerCase().includes(search.toLowerCase())
)

const filteredStaff = staff.filter((s)=>
s.name?.toLowerCase().includes(search.toLowerCase())
)

function addStudent(newStudent){
setStudents(prev => [...prev,newStudent])
}

function addStaff(newStaff){
setStaff(prev => [...prev,newStaff])
}

return(

<BrowserRouter>

<div className="appLayout">

<Sidebar/>

<div className="mainContent">

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/about" element={<About/>}/>

<Route path="/contact" element={<Contact/>}/>


{/* STUDENT DASHBOARD */}

<Route path="/student-dashboard" element={

<div>

<div className="topbar">

<h1>Students</h1>

<input
className="search"
placeholder="Search student..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

<p className="count">{students.length} Students</p>

<div className="controls">

<button onClick={()=>setView("grid")}>Grid</button>

<button onClick={()=>setView("table")}>Table</button>

<Link to="/create-student">
<button className="create">+ Add Student</button>
</Link>

</div>

{view==="grid" && <Stud_grid data={filteredStudents}/>}

{view==="table" && <Stud_table data={filteredStudents}/>}

</div>

} />


{/* STAFF DASHBOARD */}

<Route path="/staff-dashboard" element={

<div>

<div className="topbar">

<h1>Staff</h1>

<input
className="search"
placeholder="Search staff..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

<p className="count">{staff.length} Staff</p>

<div className="controls">

<button onClick={()=>setView("grid")}>Grid</button>

<button onClick={()=>setView("table")}>Table</button>

<Link to="/create-staff">
<button className="create">+ Add Staff</button>
</Link>

</div>

{view==="grid" && <Staff_grid data={filteredStaff}/>}

{view==="table" && <Staff_table data={filteredStaff}/>}

</div>

} />

<Route path="/create-student" element={<StudRegform addStudent={addStudent}/>}/>

<Route path="/create-staff" element={<StaffRegForm addStaff={addStaff}/>}/>

</Routes>

</div>

</div>

</BrowserRouter>

)

}