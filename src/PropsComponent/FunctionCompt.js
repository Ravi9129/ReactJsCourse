import React, { useEffect } from 'react'

function FunctionCompt(props) {

    useEffect(() => {
        console.log("check props", props.name)
    },[])

    useEffect(() => {
        console.log("check props2 for update", props.name)
    }, [props.name])

    let data = "jsx smjho na"
    return (
        <div>
            <h1>{data}</h1>
            <h2>{props.name}</h2>
        </div>
    )
}

export default FunctionCompt