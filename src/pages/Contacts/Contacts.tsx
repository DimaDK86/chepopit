import React, { useState } from "react";
import "./Contacts.scss";
import phone from "../../assets/phone.png";
import whatsapp from "../../assets/whatsapp.png";
import telegram from "../../assets/tg.png";

const Contacts = () => {
  const phoneNumber = "+79013544854";
  const phoneNumber2 = "+79809010436";
  const whatsappNumber = "+79013544854";
  const whatsappNumber2 = "+79809010436";
  const telegramUsername = "ChePopit";

  const [activeTab, setActiveTab] = useState("fl"); // 'fl' или 'ka'

  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="contacts">
      <h2>КАК НАС НАЙТИ | ЯндексКарты</h2>

      <div className="maps">
        <div className="tabs-container">
          <div className="tabs-header">
            <button
              className={`tab-button ${activeTab === "fl" ? "active" : ""}`}
              onClick={() => setActiveTab("fl")}
            >
              Филатов Луг
            </button>
            <button
              className={`tab-button ${activeTab === "ka" ? "active" : ""}`}
              onClick={() => setActiveTab("ka")}
            >
              Кленовые Аллеи
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === "fl" && (
              <div className="tab-panel">
                <div className="map-tille" onClick={handleToggle}>
                  <h2>ЖК Саларьево Парк (метро Филатов Луг)</h2>
                </div>
                <div className="map">
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?ll=37.416580%2C55.601284&mode=search&oid=135224636907&ol=biz&z=16.48"
                      width="700px"
                      height="500px"
                      allowFullScreen
                      style={{ position: "relative", border: "none" }}
                      title="Карта расположения Чё попить"
                    ></iframe>
                  </div>
                  <div className="contact wow animate__backInLeft">
                    <div className="address">
                      <h3>Наш адрес</h3>
                      <p>Москва улица Малое Понизовье дом 8 корп. 1</p>
                    </div>
                    <div className="time">
                      <h3>Время работы</h3>
                      <p>ПН-ВС с 11:00 до 23:00</p>
                      <p>без выходных и перерывов</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ka" && (
              <div className="tab-panel">
                <div className="map-tille">
                  <h2>ЖК Кленовые Аллеи (Троицк / Ватутинки)</h2>
                </div>
                <div className="map">
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?ll=37.346762%2C55.507830&mode=search&oid=41291299107&ol=biz&z=16.48"
                      width="700px"
                      height="500px"
                      allowFullScreen
                      style={{ position: "relative", border: "none" }}
                      title="Карта расположения Чё попить"
                    ></iframe>
                  </div>
                  <div className="contact wow animate__backInLeft">
                    <div className="address">
                      <h3>Наш адрес</h3>
                      <p>Москва улица Яворки дом 1 корп. 3</p>
                    </div>
                    <div className="time">
                      <h3>Время работы</h3>
                      <p>ПН-ВС с 11:00 до 23:00</p>
                      <p>без выходных и перерывов</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="contacts-items">
        <h2>КОНТАКТЫ</h2>
        <p>по вопросам сотрудничества, открытых ваканчий и прочим,</p>
        <p>будем рады Вам ответить любым удобным способом:</p>
        <div className="contacts-item">
          <div>
            <a href={`tel:${phoneNumber}`} className="social-link">
              <img className="social-icon" src={phone} alt="phone" />
              +7 (901) 354-48-54
            </a>
          </div>
          <div>
            <a href={`tel:${phoneNumber2}`} className="social-link">
              <img className="social-icon" src={phone} alt="phone" />
              +7 (980) 901-04-36
            </a>
          </div>
          <div>
            <a
              href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img className="social-icon" src={whatsapp} alt="whatsapp" />
              +7 (901) 354-48-54
            </a>
          </div>
          <div>
            <a
              href={`https://wa.me/${whatsappNumber2.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img className="social-icon" src={whatsapp} alt="whatsapp" />
              +7 (980) 901-04-36
            </a>
          </div>
          <div>
            <a
              href={`https://t.me/${telegramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img className="social-icon" src={telegram} alt="telegram" />
              @ChePopit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
