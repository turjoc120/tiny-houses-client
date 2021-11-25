import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('https://guarded-spire-09139.herokuapp.com/allorders').then(res => {
            setOrders(res.data)
        })
    }, [orders])


    // update status
    const statusHandler = (id, order) => {
        const data = { status: "Confirmed" }
        if (order.status !== "Confirmed") {
            Swal.fire({
                title: 'Are You Sure ?',
                text: "Mark This Order As Confirmed",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Approve it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.put(`https://guarded-spire-09139.herokuapp.com/order/update/${id}`, data).then((res) => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                'This order has been Updated.',
                                'success'
                            )
                        }
                    })
                }
            })
        }


    }


    // delete an order 
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
                axios.delete(`https://guarded-spire-09139.herokuapp.com/myorders/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'This Booking has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }

    if (orders.length < 1) {
        return <Container className='mt-5'>
            <h3>No Bookings Here Yet</h3>
            <img className='w-50' src="https://image.freepik.com/free-vector/study-abroad-concept-illustration_114360-7493.jpg" alt="" /></Container>
    }

    return (
        <Container className="my-5">
            <h2 className="mb-4">Manage All <span className="text-success">Bookings</span> </h2>
            <h3 className="mb-4">Total Bookings <span className="text-dark">{orders.length}</span> </h3>
            <Table bordered hover size="lg" responsive>
                <thead >
                    <tr className="p-5">
                        <th>SN</th>
                        <th>Booked By</th>
                        <th>House</th>
                        <th>Location</th>
                        <th className="text-success">Cost</th>
                        <th>Status</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order.email}</td>
                                <td>{order.title} </td>
                                <td>{order.location}</td>
                                <td className="text-success fw-bolder">Price: ${parseInt(order?.price?.replace(",", "")) + 5000}</td>
                                <td><button onClick={() => statusHandler(order._id, order)} className={`btn ${order.status === "Pending" ? "btn-warning" : "btn-success"}  rounded-pill btn-sm`}>{order.status}</button></td>
                                <td><button onClick={() => deleteHandler(order._id)} className="btn btn-danger rounded-pill btn-sm">Cancel</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>



        </Container>
    );
};

export default AllOrders;