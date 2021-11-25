import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DealsCard = ({ house }) => {
    const { title, info, price, location, rooms, sf, img, _id } = house;

    return (
        <Col>
            <Card style={{ borderRadius: "1rem" }} className="init-card " >
                <Card.Img style={{ borderRadius: "1rem" }} variant="top" height="250" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    <div>


                        <p>{info.slice(0, 60)}..<Link to={`/deals/${_id}`}>see more</Link> </p>

                        <p className="card-text mt-2"><small className="text-muted">{rooms} Rooms | {sf} | {location}</small></p>

                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="text-success fw-bolder">${price}</h3>
                            <Link to={`/house/${_id}`}><button className="book-button">Book Now <i class='fas fa-angle-right'></i></button></Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DealsCard;