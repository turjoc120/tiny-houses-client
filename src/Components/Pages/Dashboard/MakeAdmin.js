import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();



    const onSubmit = data => {
        const email = { email: data.email }
        axios.put('https://guarded-spire-09139.herokuapp.com/user', email).then(res => {
            console.log(res);
            if (res.data.modifiedCount > 0) {
                reset()
                Swal.fire(
                    'Done!',
                    'The User Has Been Promoted',
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
                        <img className="w-25" src="https://image.flaticon.com/icons/png/512/1256/1256171.png" alt="" />
                        <h3 className="my-4" >Make Admin </h3>
                        <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>


                            {errors.email && <small className="text-danger ">*this field required</small>}
                            <input placeholder='email.. ' type="email" className="w-100 px-2 mb-3 py-3 rounded-3  border border-secondary border-2" {...register("email", { required: true })} />


                            <input className="btn btn-success px-4 py-2 mt-3" type="submit" value='Make Admin' />


                        </form>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default MakeAdmin;