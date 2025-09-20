import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import './App.css';
import About from "./pages/About/About";
import Header from "./pages/HomePage/homePageComponents/Header";
import Contacts from "./pages/Contacts/Contacts";
import Assortment from "./pages/Assortment/Assortment";
import Footer from "./pages/HomePage/homePageComponents/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className='main'>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/assortment" element={<Assortment/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;