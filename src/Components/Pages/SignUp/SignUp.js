import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';
import HeaderNav from '../Shared/HeaderNav/HeaderNav';
import useAuth from "../../../hooks/useAuth"
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Footer from '../Shared/Footer/Footer';


const SignUp = () => {
    const [passMatch, setPassmatch] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const history = useHistory();

    const { registerUser, errMess } = useAuth()

    const onSubmit = data => {
        if (data.password !== data.confirmPass) {
            setPassmatch(true)
        } else {
            setPassmatch(false)
            registerUser(data.email, data.password, data.name, history)
            reset()
        }


    };


    return (
        <div>
            <HeaderNav></HeaderNav>
            <Row className="gy-md-3">
                <Col xs={11} md={8} lg={5} className="mx-auto my-auto">
                    <form className="d-flex flex-column justify-content-center align-items-center px-5" onSubmit={handleSubmit(onSubmit)}>
                        <p className="mt-4 mb-3 fw-bold">Fill this sign up form</p>

                        <input defaultValue={""} placeholder="Full Name" className="w-100 px-2  py-3 rounded-3  border border-secondary border-2" {...register("name", { required: true })} />
                        {errors.name && <small className="text-danger ">*This field is required</small>}


                        <input defaultValue={""} placeholder="email" type="email" className="w-100 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("email", { required: true })} />
                        {errors.email && <small className="text-danger ">*This field is required</small>}


                        <input defaultValue={""} type="password" placeholder="password" className="w-100 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("password", { required: true })} />
                        {errors.password && <small className="text-danger ">*This field is required</small>}
                        {passMatch && <small className="text-danger ">*password doesn't match</small>}


                        <input defaultValue={""} type="password" placeholder="retype password" className="w-100 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("confirmPass", { required: true })} />
                        {errors.confirmPass && <small className="text-danger ">*This field is required</small>}
                        {passMatch && <small className="text-danger ">*password doesn't match</small>}


                        <div className="mt-3"><input className="me-2" type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" />
                            <label for="subscribeNews">Agree with our terms and conditions</label></div>

                        {errMess && <small className="text-danger ">{errMess}</small>}
                        <input className="btn btn-success px-3 py-2 mt-3" type="submit" value='SignUp' />

                    </form>
                    <div className="mt-3"><p>Already have a account? <Link to="/login">Login</Link></p></div>
                </Col>
                <Col xs={12} md={12} lg={7} >
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1601312044126-06d550c15beb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;