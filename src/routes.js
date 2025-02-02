import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";

const RoutesComponent = () => {
    return (
        <Router basename="/sign-data-storage">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/result/:code" element={<Result />} />
                <Route exact path="/not-found" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default RoutesComponent;