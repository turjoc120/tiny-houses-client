import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

import SingleBooking from './SingleBooking';

const Orders = () => {

    const [myOrders, setMyOrders] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        axios.get(`https://guarded-spire-09139.herokuapp.com/myorders/${user.email}`).then(res => {
            setMyOrders(res.data)
        })
    }, [myOrders])

    if (!myOrders.length) {
        return <Container className='mt-5'>
            <h3>You Don't Have Any Bookings Yet</h3>
            <img className='w-50' src="https://i.ibb.co/k8HrZbB/empty.png" alt="" /></Container>
    }

    return (
        <Container className='my-5'>
            <h2>All Your <span className="text-success">Bookings</span> Are Here</h2>
            <Row lg={1} md={1} xs={1} className="gy-5 my-3">
                {
                    myOrders.map(order => <SingleBooking key={order._id} setMyOrders={setMyOrders} order={order}></SingleBooking>)
                }
            </Row>
        </Container>
    );
};

export default Orders;