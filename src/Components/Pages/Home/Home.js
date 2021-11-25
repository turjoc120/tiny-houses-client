import React from 'react';
import Footer from '../Shared/Footer/Footer';
import HeaderNav from '../Shared/HeaderNav/HeaderNav';
import ExtraShop from './ExtraShop';
import HeroSec from './HeroSec/HeroSec';
import HomeDeals from './HomeDeals/HomeDeals';
import HomeRatings from './Ratings/HomeRatings';
import SubscribeSec from './SubscribeSec';

const Home = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <HeroSec></HeroSec>
            <HomeDeals></HomeDeals>
            <ExtraShop />
            <HomeRatings></HomeRatings>
            <SubscribeSec />
            <Footer></Footer>
        </div>
    );
};

export default Home;