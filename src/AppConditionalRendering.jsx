
import './App.css';
import Stud_grid from './components/Stud_grid';
import Stud_table from './components/Stud_table';
export default function App(){
  let isVerified =false;
  let house = "blue";
  let display = "grid";
  return(
    <div>
      {isVerified?<div>Verified</div>:null}
      <div className={house==="green"?'bg-green':'bg-blue'}></div>
      {display==="grid"?<Stud_grid/>:<Stud_table/> }
    </div>
  );
}
