import React from 'react'
class ClassComp extends React.Component{

    
    
    constructor(){
        super();
      this.state={
        name:'ravi state property',
        age:'24 year'
      }
    }
    componentDidMount(){
        console.log("Component DidMount");
    }

    componentDidUpdate(){
        console.log("Did Update")
        alert("Data Updated")
    }

    render(){
        console.log("render")
    return(
        <div>
        <h1>Class Component</h1>
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
        <button onClick={()=>{this.setState({name:'Ravi Rajput'})}}>Update State</button>
    </div>)
    }
}

export default ClassComp;