import { memo } from "react"
const UpdateText=({value})=>{
    console.log("Update number2")
    return(
        <div>
            <h2>Update Number2</h2>
            <h3>Value is {value}</h3>
        </div>
    )
}
export default memo(UpdateText)