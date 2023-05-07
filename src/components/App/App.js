import React from "react";
import "./App.scss";
import Navbar from "../Navbar";
import MainPage from "../MainPage";
import AboutUs from "../AboutUs";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import SignIn from "../SignIn";
import YourDestinationes from "../YourDestinationes";
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import YourDestinations from "../YourDestinationes";

const App = () => {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/contact-form' element={<ContactForm />} />
                    <Route path='/your-destinations' element={<YourDestinations />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
};
export default App;

