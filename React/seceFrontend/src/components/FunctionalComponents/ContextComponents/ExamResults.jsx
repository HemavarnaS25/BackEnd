import { useContext } from "react";
import { ThemeProvider } from "../Hooks/UseContext";

const ExamResults=()=>{
    const res=useContext(ThemeProvider)
    return(
        <div>
            {console.log(res)}
          <h1>Result published and your SGPA is {res.sgpa},CGPA is {res.cgpa}</h1>
        </div>
    )
}
export default ExamResults;