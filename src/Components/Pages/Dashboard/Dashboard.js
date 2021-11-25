import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import HeaderNav from '../Shared/HeaderNav/HeaderNav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Orders from './Orders';
import Review from './Review';
import Payment from './Payment';
import AllOrders from './AllOrders';
import AddHouse from './AddHouse';
import AllHouses from './AllHouses';
import MakeAdmin from './MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from './AdminRoute';
import Footer from '../Shared/Footer/Footer';





const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth()

    return (
        <div >
            <HeaderNav></HeaderNav>
            <Row>
                <Col lg={3}  >

                    <Navbar bg="transparent" expand="lg"  >
                        <Container >
                            <Navbar.Toggle aria-controls="basic-navbar-nav" ><span>

                                <span style={{ fontSize: '15px' }}><i class="fas fa-chevron-down"></i> &nbsp;< small >Dashboard</small></span>

                            </span></Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav " >
                                <div className=" mx-auto">
                                    <Nav className="d-flex flex-column " >
                                        <Navbar.Brand as={Link} to={`${url}`}>Dashboard</Navbar.Brand>
                                        <Nav.Link as={Link} to={`${url}/myOrders`}><i class="fas fa-shopping-cart"></i> My Orders</Nav.Link>
                                        <Nav.Link as={Link} to={`${url}/review`}> <i class="fas fa-star"></i> Review</Nav.Link>
                                        <Nav.Link as={Link} to={`${url}/payment`}> <i class="fas fa-hand-holding-usd"></i>Payment</Nav.Link>

                                        {/* admin routes  */}
                                        {admin && <>
                                            <Nav.Link as={Link} to={`${url}/manageAllOrders`}><i class="fas fa-list"></i> All Bookings</Nav.Link>
                                            <Nav.Link as={Link} to={`${url}/addHouse`}><i class="fas fa-plus-square"></i> Add A House</Nav.Link>
                                            <Nav.Link as={Link} to={`${url}/makeAdmin`}><i class="fas fa-user-plus"></i> Make Admin</Nav.Link>
                                            <Nav.Link as={Link} to={`${url}/manageHouses`}> <i class="fas fa-edit"></i> Manage Houses</Nav.Link> </>}



                                    </Nav>
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>

                <Col lg={8} className="mx-auto">

                    <Switch>
                        <Route exact path={path}>
                            <Orders></Orders>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <Orders></Orders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <AdminRoute path={`${path}/manageAllOrders`}>
                            <AllOrders></AllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addHouse`}>
                            <AddHouse></AddHouse>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageHouses`}>
                            <AllHouses></AllHouses>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                </Col>
            </Row>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;