import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import About from "./pages/About/About";
import Header from "./pages/HomePage/homePageComponents/Header";
import Contacts from "./pages/Contacts/Contacts";
import Assortment from "./pages/Assortment/Assortment";
import Footer from "./pages/HomePage/homePageComponents/Footer";
import Loader from "./pages/components/Loader";
import LogoEmblem from "./pages/components/LogoEmblem";
import Popup from "./pages/popup/Popup";
import NotFound from "./pages/HomePage/NotFound";

// Хук для проверки доступа
const useAccessCheck = () => {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAccess = () => {
      const accessGranted = localStorage.getItem('accessGranted');
      const accessTimestamp = localStorage.getItem('accessTimestamp');
      
      if (accessGranted && accessTimestamp) {
        const currentTime = new Date().getTime();
        const storedTime = parseInt(accessTimestamp);
        const timeDiff = currentTime - storedTime;
        
        console.log('Time difference:', timeDiff, 'ms');
        
        if (timeDiff < 86400000) { // 1 минута = 60000 мс
          console.log('Access granted - time valid');
          setHasAccess(true);
        } else {
          console.log('Access expired');
          localStorage.removeItem('accessGranted');
          localStorage.removeItem('accessTimestamp');
          setHasAccess(false);
        }
      } else {
        console.log('No access found');
        setHasAccess(false);
      }
    };

    // Добавляем задержку для надежности
    const timer = setTimeout(checkAccess, 500);
    return () => clearTimeout(timer);
  }, []);

  return hasAccess;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const hasAccess = useAccessCheck();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Функция для обновления доступа (будет передана в Popup)
  const handleAccessUpdate = (granted: boolean) => {
    if (granted) {
      // Принудительно обновляем состояние доступа
      const currentTime = new Date().getTime();
      localStorage.setItem('accessGranted', 'true');
      localStorage.setItem('accessTimestamp', currentTime.toString());
      
      // Перезагружаем страницу для применения изменений
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {
      // При отказе сразу переходим на 404
      window.location.href = '/404';
    }
  };

  // Если еще загружаемся или проверяем доступ
  if (isLoading || hasAccess === null) {
    return (
      <div className="loader-container">
        <div>
          <LogoEmblem />
        </div>
        <Loader />
      </div>
    );
  }

  console.log('Current access status:', hasAccess);
  console.log('Current path:', location.pathname);

  // Если на странице 404, всегда показываем её
  if (location.pathname === '/404') {
    return (
      <div className="App">
        <NotFound />
      </div>
    );
  }

  // Если нет доступа и не на странице 404 - показываем попап
  if (!hasAccess) {
    return (
      <div className="App">
        <Popup onClose={handleAccessUpdate} />
      </div>
    );
  }

  // Если есть доступ - показываем основной контент
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/assortment" element={<Assortment />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;