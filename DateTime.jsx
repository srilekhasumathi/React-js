import React, {  useState } from "react";

function CurrentDateTime() {
    
    const [currentDateTime, setCurrentDateTime] = useState("");

    const updateDateTime = () => {
        setCurrentDateTime(new Date());

    };
 return(
        
        <div>
        <p>{currentDateTime.toLocaleString()}</p>

        <button onClick={updateDateTime}>Show Date&Time</button>
        </div>
        
    )
}
export default CurrentDateTime