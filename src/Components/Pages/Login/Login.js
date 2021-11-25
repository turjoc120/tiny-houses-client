import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';
import HeaderNav from '../Shared/HeaderNav/HeaderNav';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router-dom";
import Footer from '../Shared/Footer/Footer';


const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { logInUser, errMess } = useAuth()
    const location = useLocation()
    const history = useHistory()

    const onSubmit = data => {
        logInUser(data.email, data.password, location, history)
        reset()
    };


    return (
        <div>
            <HeaderNav></HeaderNav>
            <Row className="gy-md-3">

                <Col xs={12} md={12} lg={7} >
                    <img className="img-fluid" src="https://canada-usa.huttopia.com/uploads/sites/2/2019/09/Huttopia-Maine-2811-e1613940546615.jpg" alt="" />
                </Col>

                <Col xs={11} md={8} lg={5} className="mx-auto my-auto">
                    <form className="d-flex flex-column justify-content-center align-items-center px-5" onSubmit={handleSubmit(onSubmit)}>
                        <p className="mt-4 mb-3 fw-bold">Fill Your Email And Password</p>



                        <input defaultValue={""} placeholder="email" type="email" className="w-100 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("email", { required: true })} />
                        {errors.email && <small className="text-danger ">*This field is required</small>}


                        <input defaultValue={""} type="password" placeholder="password" className="w-100 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("password", { required: true })} />
                        {errors.password && <small className="text-danger ">*This field is required</small>}

                        {errMess && <small className="text-danger ">{errMess}</small>}
                        <input className="btn btn-success px-3 py-2 mt-3" type="submit" value='Login' />
                    </form>
                    <div className="mt-3"><p>Don't have a account? <Link to="/signup">sign up</Link></p></div>
                </Col>

            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Login;