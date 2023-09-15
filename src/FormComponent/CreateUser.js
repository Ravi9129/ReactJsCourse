import React, { useState } from 'react'

function CreateUser() {

    const [name, setName] = useState(" ");
    const [age, setAge] = useState(" ");
    const [address, setAddress] = useState(" ")
    function makeUser() {
        let data={name,age,address}
        console.log("called",data)
    }

    return (
        <div>

            <h1>Make a New User</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} name="username" value={name}></input>
            <br></br>
            <br></br>
            <input type="text" onChange={(e) => setAge(e.target.value)} name="age" value={age}></input>
            <br></br>
            <br></br>
            <input type="text" onChange={(e) => setAddress(e.target.value)} name="address" value={address}></input>
            <br></br>
            <br></br>
            <button onClick={makeUser}>Create User</button>

        </div>
    )
}

export default CreateUser