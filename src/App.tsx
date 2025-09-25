import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import About from "./pages/About/About";
import Header from "./pages/HomePage/homePageComponents/Header";
import Contacts from "./pages/Contacts/Contacts";
import Assortment from "./pages/Assortment/Assortment";
import Footer from "./pages/HomePage/homePageComponents/Footer";
import Loader from "./pages/components/Loader";
import LogoEmblem from "./pages/components/LogoEmblem";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Запускаем таймер на 2 секунды
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div>
          <LogoEmblem />
        </div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/assortment" element={<Assortment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
