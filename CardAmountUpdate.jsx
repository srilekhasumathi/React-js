import React,{useState} from "react";

function CardAmountUpdate(){
    const[amount,setAmount]=useState(100)
    return(
        <>
        <h1>Amount-{amount}</h1>
        <div>
        <button onClick={()=>setAmount(amount+100)}>+</button>
        <button onClick={()=>setAmount(amount-100)}>-</button>
        </div>
        </>
    )

}
export default CardAmountUpdate