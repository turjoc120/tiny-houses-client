
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import AllDeals from './Components/Pages/AllDeals/AllDeals';
import BookingDeal from './Components/Pages/Home/BookingDeal/BookingDeal';
import SignUp from './Components/Pages/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Pages/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Components/Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/alldeals">
              <AllDeals></AllDeals>
            </Route>
            <PrivateRoute path="/house/:id">
              <BookingDeal></BookingDeal>
            </PrivateRoute>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
