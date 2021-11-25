
import React from 'react';
import { Button } from 'react-bootstrap';
import bgImg from "../../../images/bg.jpg"

const ExtraShop = () => {

    const secStyles = {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        height: "80vh",
        backgroundColor: 'rgba(56, 45, 45, 0.7)',
        backgroundBlendMode: 'multiply',
        color: "white", display: "flex", justifyContent: "center", alignItems: "center",
    }

    return (
        <div style={secStyles}>
            <div className="px-3">
                <h2 style={{ fontSize: '2.5rem' }}>SHOP HANDIPICKED QUALITY PRODUCTS</h2>
                <h6 className="my-3">everything you need for your small home for your next adventure!</h6>
                <Button variant="outline-light" className="rounded-pill px-5 py-3">Shop Now <i class="fas fa-shopping-cart"></i></Button>
            </div>
        </div>
    );
};

export default ExtraShop;