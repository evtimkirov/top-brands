import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AppRouter from "./AppRouter.jsx";

const App = () => {
    return (
        <div className="App">
            <div className="container container-fluid">
                <Router>
                    <Navbar />
                    <AppRouter />
                </Router>
            </div>
        </div>
    );
};

export default App;
