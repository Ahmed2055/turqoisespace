import React from "react";
import "./styles/globals.css";
import { BrowserRouter as Router, Switch , Route, Link } from "react-router-dom";
import HomePage from "./pages/ar/HomePage";
import Cart from "./pages/ar/Cart" ;
import AboutUs from "./pages/ar/AboutUs";
import Notifications from "./pages/ar/Notifications";
import CounsellingServices from "./pages/ar/productsPages/CounsellingServices";
import PrivateClasses from "./pages/ar/productsPages/PrivateClasses";
import WorkShops from "./pages/ar/productsPages/WorkShops";
import Services from "./pages/ar/productsPages/Services";
import PrivateOrders from "./pages/ar/productsPages/PrivateOrders";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/ar/productsPages/WorkShops">
                        <WorkShops />
                    </Route>
                    <Route path="/ar/productsPages/PrivateOrders">
                        <PrivateOrders />
                    </Route>
                    <Route path="/ar/productsPages/Services">
                        <Services />
                    </Route>
                    
                    <Route path="/ar/productsPages/PrivateClasses">
                        <PrivateClasses />
                    </Route>
                    <Route path="/ar/productsPages/CounsellingServices">
                        <CounsellingServices />
                    </Route>
                    <Route path="/ar/Notifications">
                        <Notifications />
                    </Route>
                    <Route path="/ar/AboutUs">
                        <AboutUs />
                    </Route>
                    <Route path="/ar/Cart">
                        <Cart />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
