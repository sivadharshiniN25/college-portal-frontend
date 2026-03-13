import "./Staff_table.css";

export default function Staff_table({data}){

return(

<div>

<h2>Staff Table</h2>

<table className="bg-blue">

<thead>

<tr>
<th>Name</th>
<th>Department</th>
<th>Staff ID</th>
<th>Email</th>
</tr>

</thead>

<tbody>

{data.map((val)=>(
<tr key={val.id}>

<td>{val.name}</td>
<td>{val.department}</td>
<td>{val.staffId}</td>
<td>{val.email}</td>

</tr>
))}

</tbody>

</table>

</div>

)

}