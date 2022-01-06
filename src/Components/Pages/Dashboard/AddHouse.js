import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddHouse = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('https://guarded-spire-09139.herokuapp.com/addHouse', data).then(res => {
            if (res.data.insertedId) {
                Swal.fire(
                    'Done!',
                    'The House Has Been Added',
                    'success'
                )
            }
        })
        reset()
    }

    return (
        <div>
            <Container className='my-5'>

                <Row className='d-flex justify-content-center align-items-center '>
                    <Col className='p-5 py-5 border border-1 border-success' style={{ boxShadow: "0px 2px 13px 1px #80d47d", borderRadius: '1rem' }} lg={8} xs={10} md={8}>
                        <img className="w-50" src="https://image.freepik.com/free-vector/storehouse-workers-keeping-records-boxes_74855-11065.jpg" alt="" />
                        <h3 className="my-5" >Add New House </h3>
                        <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                            {errors.title && <small className="text-danger ">*This field is required</small>}
                            <input placeholder='Title.. ' className="w-100 px-2 mb-3 py-3 rounded-3  border border-secondary border-2" {...register("title", { required: true })} />

                            {errors.info && <small className="text-danger ">*Min 60 character is required</small>}
                            <textarea placeholder='Description.. ' className="w-100 px-2 mb-3 py-3 rounded-3  border border-secondary border-2" {...register("info", { required: true, minLength: 60 })} />

                            {errors.info && <small className="text-danger ">*At Least one image is required</small>}
                            <input placeholder="image url..." className="w-100 px-2  py-3 rounded-3 border border-secondary border-2" {...register("img", { required: true })} />

                            <div className="w-100">
                                <input placeholder="(optional) image url..." className="w-50  px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("img2")} />

                                <input placeholder="(optional) image url..." className="w-50 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("img3")} />

                            </div>
                            <div className="w-100">

                                <input placeholder="Price $$" className="w-50 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("price")} />

                                <input placeholder=" Loaction " className="w-50  px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("location")} />


                            </div>
                            <div className="w-100">

                                <input placeholder="rooms" className="w-50 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("rooms")} />

                                <input placeholder=" SQUARE FEET(SF) " className="w-50  px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("sf")} />


                            </div>


                            <input className="btn btn-outline-danger px-5 py-3 mt-4" type="submit" value='Add Offer' />


                        </form>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default AddHouse;