
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderNav from '../../Shared/HeaderNav/HeaderNav'
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';


const BookingDeal = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams()
    const tax = 5000
    const [deals, setDeals] = useState({})
    const history = useHistory()

    const { user } = useAuth()

    useEffect(() => {
        axios.get(`https://guarded-spire-09139.herokuapp.com/houses/${id}`).then(res => {
            setDeals(res.data)
        })
    }, []);

    const handelBack = () => {
        history.push("/");
    };

    const onSubmit = data => {

        deals.email = user.email;
        deals.status = "Pending";
        delete deals._id;

        axios.post('https://guarded-spire-09139.herokuapp.com/addorders', deals).then(res => {
            if (res.data.insertedId) {
                Swal.fire(
                    'Great!',
                    'Booking will be reviewed by agent',
                    'success'
                )
            }
        })


    };

    return (
        <>
            <HeaderNav></HeaderNav>
            <Container className="my-5 ">
                <div className="d-flex justify-content-start">
                    <Button onClick={handelBack} variant="tranparent" className="mb-4 fs-5"><i className="fas fa-arrow-circle-left fs-4"></i> Go Back </Button>

                </div>
                <Row className="g-5">
                    {/* House info  */}

                    <Col className='px-5' xs={12} lg={12} md={12}>
                        <h3 className="mt-2 mb-4"> HOUSE INFORMATION</h3 >
                        <img src={deals?.img} className="img-fluid mb-4" alt="" />
                        <Row className="gy-3">
                            <Col lg={6} >
                                <img src={deals?.img2} className="img-fluid" alt="" />
                            </Col>
                            <Col lg={6}>
                                <img src={deals?.img3} className="img-fluid" alt="" />
                            </Col>
                        </Row>

                        <h3 className="my-5">{deals?.title}</h3>

                        <p style={{ textAlign: "justify" }} className="my-4"> <span className="fs-4"> HOUSE INFO :</span>  {deals?.info}</p>
                        <h5 style={{ textAlign: "left" }} className='my-3'>Location : {deals?.location}</h5>
                        <h5 style={{ textAlign: "left" }} className='my-3'>Rooms : {deals?.rooms} Bedrooms</h5>
                        <h4 className='mt-5' >SPECIFICATIONS</h4>
                        <Table bordered hover className="mb-5" size="sm">
                            <tbody>
                                <tr>
                                    <td>BASE PRICE(USD)</td>
                                    <td>${deals?.price}</td>
                                </tr>
                                <tr>
                                    <td>SQUARE FEET(SF)</td>
                                    <td>{deals?.sf}</td>
                                </tr>
                                <tr>
                                    <td>SLEEPS</td>
                                    <td>Up to 4</td>
                                </tr>
                                <tr>
                                    <td>LAYOUT</td>
                                    <td>2 Loft | 1 Bath</td>
                                </tr>
                                <tr>
                                    <td>BUILT BY</td>
                                    <td>{deals?.location}</td>
                                </tr>
                                <tr>
                                    <td>TYPE</td>
                                    <td>Tiny House </td>
                                </tr>
                                <tr>
                                    <td>DIMENSIONS(in FT)</td>
                                    <td>24' x 8.5'</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Col>



                    {/* booking sec  */}

                    <Col style={{ boxShadow: "0px 2px 13px 1px rgba(0,0,0,0.75)" }} className="rounded py-3 px-5 mx-auto" xs={11} lg={8} md={8}>
                        <div className="d-flex justify-content-between align-items-center" style={{ textAlign: 'left' }} >
                            <span> <h5 className="mt-5 mb-3 ">Price details: ${deals?.price} </h5>
                                <h5>Tax  : ${tax}</h5></span>
                            <h3 className="mt-5 mb-3 ">Total : ${parseInt(deals?.price?.replace(",", "")) + tax} </h3>
                        </div>

                        <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                            <p className="mt-4 mb-1 fw-bold">Personal Info</p>
                            <input defaultValue={user?.displayName} className="w-100 px-2  py-3 rounded-3  border border-secondary border-2" {...register("name")} />
                            <input defaultValue={user?.email} className="w-100 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("email")} />
                            <div >
                                <p className="mt-4 mb-1 fw-bold">Billing address</p>
                                <input style={{ borderTopLeftRadius: '10px', borderTopRightRadius: "10px", border: "2px solid lightgray" }} className="w-100 px-2 py-3" {...register("street")} placeholder='Street Address..' />

                                <input className="w-100 px-2  py-3" {...register("apt")} placeholder='Apt OR Suite..' />
                                <input className="w-100 px-2  py-3" {...register("city")} placeholder='city' />
                                <input style={{ borderBottomLeftRadius: "10px", border: "2px solid lightgray" }} className="w-50 px-2  py-3" {...register("state")} placeholder='state' />
                                <input style={{ borderBottomRightRadius: '10px', border: "2px solid lightgray" }} className="w-50 px-2  py-3" type='number' {...register("zip")} placeholder='state' />
                            </div>
                            <small className="mt-5">By selecting the button below, I agree to the TinyHouse Rules,Agent Requirements and the Guest Refund Policy. I agree to pay the agent amount fee shown if the agent accepts my booking request.</small>
                            <input className="btn btn-danger px-5 py-3 mt-5" type="submit" value='Send To Agent   ' />
                        </form>
                        <div style={{ textAlign: "left" }} className="mt-5">
                            <Link to="/">Contact for a visit?</Link>
                            <div className="mt-4">
                                <h4>Quick policy</h4>
                                <p> Determine How Much House You Can Afford, Get Prequalified and Preapproved for credit for Your Mortgage,Find the Right Real Estate Agent,Most local governments in the United States impose a property tax, also known as a millage rate, as a principal source of revenue. . ... The property tax typically produces the required revenue for municipalities' tax levies.</p>
                                <p className="mt-4">
                                    This tax may be imposed on real estate or personal property. <Link to="/">Learn more</Link>
                                </p>
                                <h5 className="mt-4">
                                    EB-5 and E2 are not a citizenship by investment program,.
                                </h5>
                                <p> investors can apply for USA citizenship after five years of Permanent Residency..</p>


                            </div>
                        </div>
                    </Col>


                </Row>

            </Container >
            <Footer></Footer>
        </>
    );
};

export default BookingDeal;