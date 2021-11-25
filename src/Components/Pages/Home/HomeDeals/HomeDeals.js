import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DealsCard from './DealsCard';
import BeatLoader from "react-spinners/BeatLoader";

const HomeDeals = () => {
    const [houses, setHouse] = useState([])

    useEffect(() => {
        axios.get('https://guarded-spire-09139.herokuapp.com/houses').then(res => setHouse(res.data))
    }, [])

    if (houses.length === 0) {
        return <BeatLoader color="#318528" size={30} />
    }

    return (
        <div className="my-5" id="homes">
            <h2 className="my-4 fw-light" style={{ fontSize: '3rem' }}>Top New Tiny Homes For Sale</h2>
            <Container>
                <Row xs={1} md={3} lg={3} className="g-4">
                    {
                        houses.slice(0, 6).map(house => <DealsCard house={house} ></DealsCard>)
                    }


                </Row>
            </Container>
        </div>
    );
};

export default HomeDeals;