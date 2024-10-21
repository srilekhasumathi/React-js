import React from "react";

class StateClassComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={Message:"welcome to credo systemz", Process: "thanks to visit"}

    }
    ChangeMessage(){
        this.setState({Message:"thank you",Process:"",Notific:""})
    }
    ChanMessage(){
        this.setState({Message:"",Process:"wellcome",Notific:""})
    }
      
    render(){
        return(
            <>
            <h1>{this.state.Message} - {this.state.Process} - {this.state.Notific}</h1>
            <button onClick={()=>this.ChanMessage()}>On</button>
            <button onClick={()=>this.ChangeMessage()}>Click</button>
            </>
        )
    }
}    
export default StateClassComponent