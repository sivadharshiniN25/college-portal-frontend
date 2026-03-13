import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

export default function StudRegform({addStudent}){

const navigate = useNavigate()

const [name,setName] = useState("")
const [roll,setRoll] = useState("")
const [reg,setReg] = useState("")
const [duration,setDuration] = useState("")
const [course,setCourse] = useState("")

async function handleSubmit(e){

e.preventDefault()

let obj = {
"name": name,
"course": course,
"rollNo": rollNo,
"duration":duration,
"regNo": regNo
}

const response = await fetch("http://localhost:8080/api/student",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(newStudent)
})

const savedStudent = await response.json()

addStudent(savedStudent)

navigate("/student-dashboard")

}

return(

<div className="form-page">

<div className="form-card">

<h1>Add Student</h1>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Student Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="text"
placeholder="Roll Number"
value={roll}
onChange={(e)=>setRoll(e.target.value)}
required
/>

<input
type="text"
placeholder="Register Number"
value={reg}
onChange={(e)=>setReg(e.target.value)}
required
/>

<input
type="text"
placeholder="Course"
value={course}
onChange={(e)=>setCourse(e.target.value)}
required
/>

<input
type="text"
placeholder="Duration"
value={duration}
onChange={(e)=>setDuration(e.target.value)}
required
/>

<button type="submit">
Create Student
</button>

</form>

</div>

</div>

)

}