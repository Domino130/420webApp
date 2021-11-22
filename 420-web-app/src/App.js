import "./App.css";
import Header from "./header";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavbarComp from "./components/Navbar";

const App = () => {
    return (
        <div className="flexProps">
            <div className="title">
                <div style={{ color: "rgb(255,199,44)", fontSize: 50 }}>
                    Southeastern Louisiana University
                </div>
                <div style={{ color: "white", fontSize: 35, paddingBottom: 20 }}>
                    Computer Science Department
                </div>
            </div>

            {/* Header */}
            <div className="app-header">
                <NavbarComp />
            </div>

            {/* Footer */}
            <div className="app-footer">
                <Footer />
            </div>
        </div>
    );
};

export default App;
