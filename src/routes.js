import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Result from "./pages/Result";

const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/result/:code" element={<Result />} />
            </Routes>
        </Router>
    )
}

export default RoutesComponent;