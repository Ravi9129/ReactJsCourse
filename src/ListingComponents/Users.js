import React, { useState } from 'react'

function Users() {

    // const [user, setUser] = useState([
    //     { name: 'ravi', age: '24', address:'Noida' },
    //     { name: 'ravi rajput', age: '25', address:'Noida'  },
    //     { name: 'Komal', age: '13', address:'Noida'  },
    //     { name: 'meenakshi', age: '23', address:'Noida'  },
    //     { name: 'Ankita', age: '24', address:'Gurgaon'  }
    // ]
    const user= [
        { name: 'ravi', age: '24', address:'Noida' },
        { name: 'ravi rajput', age: '25', address:'Noida'  },
        { name: 'Komal', age: '13', address:'Noida'  },
        { name: 'meenakshi', age: '23', address:'Noida'  },
        { name: 'Ankita', age: '24', address:'Gurgaon'  }
    ]
    
    return (
        <div>
            <h1>User Listing is Here</h1>
            {
                user.map((item,i) =>
                    // <div key={i}>Age:{item.age}</div>
                    <div key={i}> {item.name},  {item.age}, {item.address}</div>
                    )
            }
        </div>
    )
}

export default Users