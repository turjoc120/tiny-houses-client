import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import BeatLoader from "react-spinners/BeatLoader";

const AllHouses = () => {

    const [houses, setHouse] = useState([])

    useEffect(() => {
        axios.get('https://guarded-spire-09139.herokuapp.com/houses').then(res => setHouse(res.data))
    }, [houses])

    if (houses.length === 0) {
        return <BeatLoader color="#318528" size={30} />
    }

    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are You Sure ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://guarded-spire-09139.herokuapp.com/houses/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'This House has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }



    return (
        <Container className="my-5">
            <h2 className="mb-4">Manage All <span className="text-success">Houses</span> </h2>
            <h3 className="mb-4">Total Houses <span className="text-dark">{houses.length}</span> </h3>
            <Table bordered hover size="lg" responsive>
                <thead >
                    <tr className="p-5">
                        <th>SN</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        houses.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order.title} </td>
                                <td>{order.location}</td>
                                <td className="text-success fw-bolder">Price: ${order?.price}</td>

                                <td><button onClick={() => deleteHandler(order._id)} className="btn btn-danger rounded-pill btn-sm">Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>



        </Container>
    );
};

export default AllHouses;