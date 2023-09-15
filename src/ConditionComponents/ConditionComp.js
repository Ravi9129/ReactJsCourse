import React, { useState } from 'react'

function ConditionComp() {

    const [user, setUser] = useState([
        { name: 'ravi', age: '24', address: 'Noida' },
        { name: 'ravi rajput', age: '25', address: 'Noida' },
        { name: 'Komal', age: '13', address: 'Noida' },
        { name: 'meenakshi', age: '23', address: 'Noida' },
        { name: 'Ankita', age: '24', address: 'Gurgaon' }
    ])

    return (
        <div>
            <h1>Condition Comp</h1>
            {
                user.length === 5?
                <div>yes,this is right</div>:<div>No length should be 5</div>
            }
        </div>
    )
}

export default ConditionComp