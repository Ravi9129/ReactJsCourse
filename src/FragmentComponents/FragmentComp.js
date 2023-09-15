import React, { Fragment,useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';


function FragmentComp() {

    const [user, setUser] = useState([
        { name: 'ravi', age: '24', address:'Noida' },
        { name: 'ravi rajput', age: '25', address:'Noida'  },
        { name: 'Komal', age: '13', address:'Noida'  },
        { name: 'meenakshi', age: '23', address:'Noida'  },
        { name: 'Ankita', age: '24', address:'Gurgaon'  }
    ])

    return (
        // <>
        //     <h1>Fragement</h1>
        //     <h1>Fragement</h1>
        //     <h1>Fragement</h1>
        //     <h1>Fragement</h1>
        // </>

        <Fragment>
            <h1>Fragement</h1>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item,index)=><tr>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.address}</td>
                    </tr>)

                        

                    }

                </tbody>
            </Table>


        </Fragment>
    )
}

export default FragmentComp