import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import quote from '../../../images/quote.png'

const Review = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useAuth()

    const onSubmit = data => {
        data.name = user.displayName


        axios.post('https://guarded-spire-09139.herokuapp.com/rating', data).then(res => {
            if (res.data.insertedId) {
                reset()
                Swal.fire(
                    'Done!',
                    'The Review Has Been Posted',
                    'success'
                )
            }
        })

    }

    return (
        <div>
            <Container className='my-5'>

                <Row className='d-flex justify-content-center align-items-center '>
                    <Col className='p-5 py-5 border border-1 border-success' style={{ boxShadow: "0px 2px 13px 1px #80d47d", borderRadius: '1rem' }} lg={8} xs={10} md={8}>
                        <img className="w-25" src={quote} alt="" />
                        <h3 className="my-5" >Add A Review </h3>
                        <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                            {errors.rating && <small className="text-danger ">*This field require 1-5 numbers</small>}
                            <input placeholder='rating.. ' type="number" className="w-100 px-2 mb-3 py-3 rounded-3  border border-secondary border-2" {...register("rating", { required: true }, { min: 1, max: 5 })} />

                            {errors.info && <small className="text-danger ">*Min 60 character is required</small>}
                            <textarea placeholder='Description.. ' className="w-100 px-2 mb-3 py-3 rounded-3  border border-secondary border-2" {...register("info", { required: true, minLength: 60 })} />


                            <input className="btn btn-outline-success px-5 py-3 mt-4" type="submit" value='Post Review' />


                        </form>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Review;