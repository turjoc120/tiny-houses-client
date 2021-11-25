
import axios from 'axios';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const SingleBooking = ({ order }) => {

    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Your Visit Will Be Canceled !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://guarded-spire-09139.herokuapp.com/myorders/${id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire(
                            'Canceled!',
                            'Your Visit has been Canceled.',
                            'success'
                        )
                    }

                })

            }
        })
    }

    return (
        <Col>
            <Row className=" gx-4 " style={{ boxShadow: "0px 2px 13px 1px #80d47d", borderRadius: '1rem', border: '1px solid #80d47d' }} >
                <Col xs={12} lg={6} md={6}>
                    <img style={{ borderRadius: "15px" }} className=" w-100 h-100 py-2" src={order.img} alt="" />
                </Col>
                <Col xs={12} lg={6} md={6} className="d-flex justify-content-center align-items-center py-5">
                    <div> <h4>{order.title}</h4>
                        <p className="pe-2" style={{ textAlign: 'justify' }}> {order.info.slice(0, 200)}</p>
                        <h4>Total: <span className="fw-bolder text-success ">${parseInt(order?.price?.replace(",", "")) + 5000}</span></h4> <small className={`${order?.status == "Pending" ? "bg-warning" : "bg-success"} rounded-pill py-1 px-2 `}>{order?.status}</small>
                        <div className='mt-3'> <Button onClick={() => handelDelete(order._id)} variant="outline-danger" className="px-2 py-2">Cancel Booking <i className="far fa-window-close ms-1"></i></Button></div>
                    </div>

                </Col>
            </Row>


        </Col>
    );
};

export default SingleBooking;