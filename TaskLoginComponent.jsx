import React from "react";

class TaskLoginComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={Message:"",Process:""}
        
    }
    ChangeMessage(){
        this.setState({Message:"Wellcome To Our Creado Systemz",Process:""})
    }
    chanMessage(){
        this.setState({Process:"Thanks To Meet You !",Message:""})
    }
   
      
    render(){
        return(
            <>
            <h1>{this.state.Message} {this.state.Process}</h1>
            <div>
            <button onClick={()=>this.ChangeMessage()}>Login</button>
            <button onClick={()=>this.chanMessage()}>Logout</button></div>
            </>
        )
    }
}  
export default TaskLoginComponent