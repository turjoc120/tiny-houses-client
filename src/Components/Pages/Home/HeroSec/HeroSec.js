import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroSecImg from '../../../../images/herosec.jpg'

const HeroSec = () => {

    const heroSecStyles = {
        backgroundImage: `url(${heroSecImg})`,
        backgroundSize: 'cover',
        height: "80vh",
        backgroundColor: 'rgba(56, 45, 45, 0.7)',
        backgroundBlendMode: 'multiply',
        color: "white", display: "flex", justifyContent: "center", alignItems: "center",
    }

    return (
        <div style={heroSecStyles}>
            <div className="px-3">
                <h1 className="text-capitalize mb-2 fw-bolder">In the market for a tiny house for <br />sale or just looking for inspiration?</h1>
                <p>welcome to the biggest Tiny House collection!</p>
                <Link to="/alldeals"><Button variant="success" className="px-3 py-2">Browse Collection <i class="fas fa-arrow-circle-right"></i></Button></Link>
            </div>
        </div>
    );
};

export default HeroSec;