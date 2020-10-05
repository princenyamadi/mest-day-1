import React, { useState } from 'react';
import './css/component4.css';
function Component4(){
    const [count,setCount] = useState(0);
    return(
        <div className="Component4">
            <h4>Component 4</h4>
            <div className="count">
            {count}
            </div>
        
        <button onClick={() => setCount(count + 1)}>

            Increment
        </button>
        <button onClick={()=>setCount(count - 1 )}>
            Decrement
        </button>
        </div>
        
    );
}

export default Component4;