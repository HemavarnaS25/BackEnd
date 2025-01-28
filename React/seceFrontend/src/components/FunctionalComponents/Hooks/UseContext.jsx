import Invigilator from "../ContextComponents/Invigilator";
import { createContext } from "react";

export const ThemeProvider=createContext()
const UseContext=()=>{
    return(
        <div>
            <ThemeProvider.Provider value={{sgpa:9.5,cgpa:8.5}}>
            <h1>This is a example of UseContext Hook which is the alternative for props Drilling.</h1>
            <h2>Students are writing their exams.</h2>
            <Invigilator />
            </ThemeProvider.Provider>
        </div>
    )
}
export default UseContext;