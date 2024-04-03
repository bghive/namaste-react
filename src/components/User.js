import { useState } from "react";

const User = (props)=>{
    const [count] = useState(0);
    const [count2] = useState(2);
    const {name} = props;
    return(
        <div className="user-card">
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <h3>{name}</h3>
            <h3>Pune</h3>
            <h3>9673483924</h3>
        </div>
    )
}

export default User;