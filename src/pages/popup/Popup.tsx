import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Popup.scss';
import LogoEmblem from '../components/LogoEmblem';

interface PopupProps {
  onClose: (accessGranted: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    const currentTime = new Date().getTime();
    localStorage.setItem('accessGranted', 'true');
    localStorage.setItem('accessTimestamp', currentTime.toString());
    
    setIsOpen(false);
    onClose(true); // Сообщаем родителю, что доступ granted
    console.log('Доступ разрешен на 1 минуту');
  };

  const handleDecline = () => {
    setIsOpen(false);
    onClose(false); // Сообщаем родителю, что доступ не granted
    // Перенаправляем на страницу 404
    navigate('/404');
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <LogoEmblem />
      <div className="popup-content">
        <div className="popup-header">
          <h2>Добро пожаловать в ЧП</h2>
        </div>
        
        <div className="popup-body">
          <p>Данный сайт содержит информацию, не предназначенную для просмотра лицами не достигшими возраста 18 лет.</p>
        </div>
        
        <div className="popup-footer">
          <button 
            className="btn btn-accept" 
            onClick={handleAccept}
          >
            Да, заходим
          </button>
          <button 
            className="btn btn-decline" 
            onClick={handleDecline}
          >
            Нет, увы
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;