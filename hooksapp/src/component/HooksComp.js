import React, { useEffect, useState } from 'react'

function HooksComponent(){

const [title] = useState('HooksComponent')
const [details]= useState('is something compnent deatils')
const [count,setCount] = useState(0)

useEffect(() => {
    console.log("FFFF");
})
console.log("gggg");


    return(
        <div>
            <h1>{title}</h1>
            <p>{details}</p>
            <h3>{count}</h3>
            <button onClick={() => {setCount(count+1)}}>
                Click Me
            </button>
        </div>
    )
}

export default HooksComponent;
