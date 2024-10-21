import React,{useState} from "react";

function StateFunctionComponent(){
    const[name,setName]=useState("Wellcome to credo systemz")
return(
    <>
    <h1>
        Hooks Topics-useState
    </h1>
    <h1>{name}</h1>
    </>
)

}
export default StateFunctionComponent
