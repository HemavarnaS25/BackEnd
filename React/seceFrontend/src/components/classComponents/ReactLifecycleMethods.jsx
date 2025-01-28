import React from "react";
class ReactLifecycleMethods extends React.Component{
    constructor(){
        super()
        console.log("constructor");
        this.state={
            number:0,
        };
    }
    updateNum=()=>{
        this.setState({number:this.state.number+1})
    }
    componentDidMount(){
        console.log("Mounting")
        //this.setState({number:this.state.number+1})
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.number!==this.state.number){
            console.log("Update com",prevState.number,this.state.number);
        }
    }
    componentWillUnmount(){
        console.log("unmount");
        this.setState({number:0})
    }
    render(){
        console.log("Inside render");
        return(
        <div>
            {console.log("Inside return")}
            <h1>This is react lifecycle methods</h1>
            <h2>The state value is {this.state.number}</h2>
            <button onClick={this.updateNum}>+</button>
        </div>
        )
    }
}
export default ReactLifecycleMethods;