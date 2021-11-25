import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const SubscribeSec = () => {
    return (
        <div className="my-5">
            <Row>
                <Col lg={6} xs={12} md={6}>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1532460089048-7b14bf14cb65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </Col>
                <Col lg={6} xs={12} md={6} className="d-flex justify-content-center align-items-center">
                    <div style={{ textAlign: 'justify' }} className="p-4">
                        <h3>The Tiny House Community</h3>
                        <h6 className="my-3">We exist to bring the community together around a common theme; live a more full and joy-filled life. </h6>
                        <p className="mb-5">For a limited time, get the Complete Guide to Buying a Tiny House for <span className="text-danger">Free</span> ($20 value) when you Subscribe Below.</p>
                        <span >
                            <input style={{ border: '2px solid gray' }} type="email" className="w-50 ps-2 rounded-pill py-2" placeholder="email address" /> <Button variant="outline-success" className="rounded-pill px-2 py-2">Subscribe <i class="fab fa-telegram-plane"></i></Button>
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SubscribeSec;