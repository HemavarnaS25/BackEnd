import { memo } from "react"
const UpdateNumber=({value})=>{
    console.log("Update number1")
    return(
        <div>
            <h2> Update Number1</h2>
            <h3>Value is {value}</h3>
        </div>
    )
}
export default memo(UpdateNumber)
