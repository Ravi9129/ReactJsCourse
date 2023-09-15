import React, { useEffect, useState } from 'react'

function FunctionComp() {

    const [name, setName] = useState("ravi Rana hooks state");
    const [age, setAge] = useState(24);
    useEffect(() => {
        console.log("hello from hooks")
    },[age])

    let data = "Jsx property"
    return (
        <div>
            <h1>FunctionComp</h1>
            <h2>{data}</h2>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <button onClick={() => setAge(63)}>Update age</button>
            <button onClick={() => setName("ravi rajput")}>Update Name</button>
        </div>
    )
}

export default FunctionComp