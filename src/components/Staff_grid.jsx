import "./Staff_grid.css";

export default function Staff_grid({data}){

return(

<div>

<h1>Staff Grid</h1>

<div className="bg-green">

{data.map((val)=>(
<div key={val.id} className="staff-card">

<div className="avatar">
{val.name.charAt(0)}
</div>

<h2>{val.name}</h2>
<p>{val.department}</p>
<p>{val.staffId}</p>
<p>{val.email}</p>

</div>
))}

</div>

</div>

)

}