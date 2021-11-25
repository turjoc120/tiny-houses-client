import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import BeatLoader from "react-spinners/BeatLoader";
import DealsCard from '../Home/HomeDeals/DealsCard';
import Footer from '../Shared/Footer/Footer';
import HeaderNav from '../Shared/HeaderNav/HeaderNav';

const AllDeals = () => {
    const [houses, setHouse] = useState([])

    useEffect(() => {
        axios.get('https://guarded-spire-09139.herokuapp.com/houses').then(res => setHouse(res.data))
    }, [houses])

    if (houses.length === 0) {
        return <BeatLoader color="#318528" size={30} />
    }

    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className="mt-5">
                <h2 className="mt-4 fw-light" style={{ fontSize: '2.5rem' }}>All Our BestSelling Homes Are Here</h2>
                <h2 className="mb-4 mt-3 fw-light">pick for yourself!</h2>
                <Container>
                    <Row xs={1} md={3} lg={3} className="g-4">
                        {
                            houses.map(house => <DealsCard house={house} key={house._id}></DealsCard>)
                        }


                    </Row>
                </Container>
                <Footer></Footer></div>
        </div>
    );
};

export default AllDeals;