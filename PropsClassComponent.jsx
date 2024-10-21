import React from "react";

class PropsClassComponent extends React.Component{
    render(){
         return(
<>
<h1>Join to {this.props.name}-{this.props.process}</h1>
</>

    )
  }
}
export default PropsClassComponent