import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import quote from "../../../../images/quote.png"
import axios from 'axios';
import Rating from 'react-rating';

const HomeRatings = () => {
    const [ratings, setRating] = useState([])

    useEffect(() => {
        axios.get(`https://guarded-spire-09139.herokuapp.com/ratings`).then(res => {
            setRating(res.data)
        })
    }, [ratings])

    return (
        <div>
            <h2 className="my-5">Users Opinios About Us</h2>
            <Container>
                <Row xs={1} md={2} lg={3} className='g-3'>
                    {
                        ratings.map(rating => (<Col>
                            <Card key={rating._id} className='shadow-sm py-2 h-100'>
                                <Card.Img variant="top" className='w-25 mx-auto p-2' src={quote} />
                                <Card.Body>
                                    <Card.Text>
                                        {rating.info}
                                    </Card.Text>
                                    <Rating readonly emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star text-warning" initialRating={rating.rating} />

                                    <h5>— {rating.name}</h5>
                                </Card.Body>
                            </Card>
                        </Col>))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeRatings;