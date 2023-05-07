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

const App = () => {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/about-us' element={<YourDestinationes />} />
                    <Route path='/contact-form' element={<ContactForm />} />
                    <Route path='/your-destinations' element={<YourDestinationes />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
};
export default App;









// import React from "react";
// import './App.scss';
// import Navbar from "../Navbar";
// import MainPage from "../MainPage";
// import AboutUs from "../AboutUs";
// import ContactForm from "../ContactForm";
// import Footer from "../Footer";
// import SignIn from "../SignIn";
// import YourDestinationes from "../YourDestinationes";
//
// const App = () => {
//     return(
//         <div>
//             <Navbar/>
//             <MainPage/>
//             <AboutUs/>
//             <SignIn/>
//             <YourDestinationes/>
//             <ContactForm/>
//             <Footer/>
//         </div>
//     )
// };
// export default App;


// import React from 'react';
// import './App.scss';
// import Navbar from "../Navbar";
// import MainPage from "../MainPage";
// import AboutUs from "../AboutUs";
// import Footer from "../Footer";
// import ContactForm from "../ContactForm";
// import SignIn from '../SignIn';
//
// import {Component} from 'react';
// import { createRoot } from 'react-dom/client';
// import {
//     HashRouter,
//     Route,
//     Routes,
//     Link,
//     NavLink,
//     Outlet
// } from 'react-router-dom';
//
// const App = () => {
//     return (
//       <div>
//       <Navbar/>
//       <MainPage/>
//       <SignIn/>
//       <AboutUs/>
//       <ContactForm/>
//       <Footer/>
//       </div>
//   );
// }
// export default App;



// import { useEffect, useState } from "react";
// import { createClient } from "@supabaseClient/supabaseClient-js";
//
// const supabaseClient = createClient("https://<project>.supabaseClient.co", "<your-anon-key>");
//
// function App() {
//     const [countries, setCountries] = useState([]);
//
//     useEffect(() => {
//         getCountries();
//     }, []);
//
//     async function getCountries() {
//         const { data } = await supabaseClient.from("countries").select();
//         setCountries(data);
//     }
//
//     return (
//         <ul>
//             {countries.map((country) => (
//                 <li key={country.name}>{country.name}</li>
//             ))}
//         </ul>
//     );
// }
//
// export default App;


//
// import React from 'react';
// import './App.scss';
// import Footer from "../Footer";
// import Navbar from "../Navbar";
// import {useState, useEffect} from "react";
// import supabaseClient from "../../supabaseClient";
//
//
// function App () {
//     const [session, setSession] = useState(null);
//
//     useEffect(() => {
//         setSession(supabaseClient.auth.session());
//         supabaseClient.auth.onAuthStateChange((_event, session) => {
//             setSession(session);
//         });
//     }, []);
//
//     return (
//       <div>
//           <Navbar session={session}/>
//
//           <Footer/>
//       </div>
//     );
// }
//
// export default App;


//
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, } from 'react-router-dom';
// import { Container } from '@mui/material';
// import { createClient } from '@supabase/supabase-js';
// import Navbar from "../Navbar";
// import Footer from '../Footer';
// import SignIn from '../SignIn';

// const supabaseUrl = 'https://owomarsllfpnkcuwxlvl.supabaseClient.co';
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93b21hcnNsbGZwbmtjdXd4bHZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDQ5NTcsImV4cCI6MTk5ODg4MDk1N30.TklK9CbeZXZLq2j4O-cRFWvnd343Scuvh0qcD1SPGRQ';
//
// const supabase = createClient(supabaseUrl, supabaseAnonKey);
//
// function App() {
//     const [session, setSession] = useState(null);
//     useEffect(() => {
//         setSession(supabase.auth.session());
//         supabase.auth.onAuthStateChange((_event, session) => {
//             setSession(session);
//         });
//     }, []);
//     return (
//     <HashRouter>
// //     <Routes>
// //         <Route path='navbar' element={<Navbar />} />
// //         <Route path='MainPage' element={<MainPage />} />
// //         <Route path="/sign-in" element={<SignIn supabase={supabase} />} />
// //         <Route path='about_us' element={<AboutUs/>}/>
// //         <Route path='contact-form' element={<ContactForm />} />
// //         <Route path='Footer' element={<Footer />} />
// //     </Routes>
// // </HashRouter>
//     );
// }
// export default App;





// <HashRouter>
//     <Routes>
//         <Route path='navbar' element={<Navbar />} />
//         <Route path='MainPage' element={<MainPage />} />
//         <Route path='sign_in' element={<SignIn />} />
//         <Route path='about_us' element={<AboutUs/>}/>
//         <Route path='contact-form' element={<ContactForm />} />
//         <Route path='Footer' element={<Footer />} />
//     </Routes>
// </HashRouter>


// <Router>
//     //             <Navbar session={session} />
//     //             <Container sx={{ minHeight: 'calc(100vh - 130px)' }}>
//     //                 <Routes>
//     //
//     //                 </Routes>
//     //             </Container>
//     //             <Footer />
//     //         </Router>