import "./Stud_table.css";

export default function Stud_table({data}){

return(

<div>

<h2>Student Table</h2>

<table className="bg-blue">

<thead>

<tr>
<th>Name</th>
<th>Course</th>
<th>Roll</th>
<th>Duration</th>
<th>Register</th>
</tr>

</thead>

<tbody>

{data.map((val)=>(
<tr key={val?.id}>

<td>{val?.name}</td>
<td>{val?.course}</td>
<td>{val?.rollNo}</td>
<td>{val?.duration}</td>
<td>{val?.regNo}</td>

</tr>
))}

</tbody>

</table>

</div>

)

}