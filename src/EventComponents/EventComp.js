import React, { useState } from 'react'



function EventComp() {


    const [val, setVal] = useState("ravi")

    // function test()
    const test = (e) => {
        console.log("hello test function", e.target.value)
        setVal(e.target.value)
    }


    return (
        <div>
            <h1>Event Components</h1>
            <input type="text" value={val} onChange={test} ></input>
            {/* <button onClick={test}>Click me </button> */}
            <button onClick={()=>alert(val)}>Click me </button>

            {/* <button onClick={()=>{console.log("hello onclick")}}> Click Me</button>
        <button onClick={function(){console.log("hello onclick")}}> Click Me</button> */}
        </div>
    )
}

export default EventComp