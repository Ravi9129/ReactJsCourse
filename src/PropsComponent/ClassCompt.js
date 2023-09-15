import React from 'react'
class ClassCompt extends React.Component{

    
    
    constructor(){
        super();
        
     
      }
      componentDidMount(){
        console.log("props",this.props.name)
    }

    componentDidUpdate(){
        console.log("props in Update",this.props)
    }
    


    render(){
       
    return(
        <div>
        <h1>Class promp Component</h1>
        <h2> {this.props.name}</h2>
      
    </div>)
    }
    
};

export default ClassCompt;