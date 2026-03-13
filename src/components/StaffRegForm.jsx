import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

export default function StaffRegForm({addStaff}){

const navigate = useNavigate()

const [name,setName] = useState("")
const [department,setDepartment] = useState("")
const [staffId,setStaffId] = useState("")
const [email,setEmail] = useState("")

async function handleSubmit(e){

e.preventDefault()

const newStaff = {
name,
department,
staffId,
email
}

const response = await fetch("http://localhost:8080/api/staff",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(newStaff)
})

const savedStaff = await response.json()

addStaff(savedStaff)

navigate("/staff-dashboard")

}

return(

<div className="form-page">

<div className="form-card">

<h1>Add Staff</h1>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Staff Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="text"
placeholder="Department"
value={department}
onChange={(e)=>setDepartment(e.target.value)}
required
/>

<input
type="text"
placeholder="Staff ID"
value={staffId}
onChange={(e)=>setStaffId(e.target.value)}
required
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<button type="submit">
Create Staff
</button>

</form>

</div>

</div>

)

}