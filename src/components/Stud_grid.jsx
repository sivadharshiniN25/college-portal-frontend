import './Stud_grid.css';

export default function Stud_grid({data}){
    return(
        <div>
            <h1>Student Grid</h1>

            <div className="bg-green">
                {
                    data.map((val)=>{
                        return(
                            <div key={val.id} className="student-card">

                            <div className="avatar">
                            {val.name.charAt(0)}
                            </div>

                            <h2>{val?.name}</h2>
                            <p>{val?.course}</p>
                            <p>{val?.rollNo}</p>
                            <p>{val?.duration}</p>
                            <p>{val?.regNo}</p>

                            </div>
                        );
                    })
                }
            </div>

        </div>
    );
}