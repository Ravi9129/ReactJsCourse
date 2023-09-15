import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function ApiCompt() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((data) => {

            data.json().then(result => {
                console.log("result", result)
                setUser(result)
            })
        })
    }, [])
    return (
        <div>
            <h1>Api Comp</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                    {
                        user.map((item, index) =>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>

                            </tr>
                        )
                    }
                </thead>

            </Table>


        </div>
    )
}

export default ApiCompt