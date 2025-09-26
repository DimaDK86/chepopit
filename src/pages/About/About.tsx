import React, { useState } from "react";
import "./About.scss";

const About = () => {
  const [activeTab, setActiveTab] = useState("fl"); // 'fl' или 'ka'
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="about">
          <div className="reviews">
              <h1>ОТЗЫВЫ</h1>
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
                <div className="reviews-tille" onClick={handleToggle}>
                  <h2>ЖК Саларьево Парк (метро Филатов Луг)</h2>
                </div>
                <div
                  style={{
                    width: "560px",
                    height: "800px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <iframe
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                    }}
                    src="https://yandex.ru/maps-reviews-widget/135224636907?comments"
                    title="Yandex Maps Reviews" // Добавлен title для доступности
                  />
                  <a
                    href="https://yandex.ru/maps/org/chyo_popit/135224636907/"
                    target="_blank"
                    rel="noopener noreferrer" // Добавлен rel для безопасности
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      color: "#b3b3b3",
                      fontSize: "10px",
                      fontFamily: "YS Text, sans-serif", // Добавлена запятая после шрифта
                      padding: "0 20px",
                      position: "absolute",
                      bottom: "8px",
                      width: "100%",
                      textAlign: "center",
                      left: "0",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "block",
                      maxHeight: "14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Чё попить на карте Москвы — Яндекс Карты
                  </a>
                </div>
              </div>
            )}

            {activeTab === "ka" && (
              <div className="tab-panel">
                <div className="reviews-tille">
                  <h2>ЖК Кленовые Аллеи (Троицк / Ватутинки)</h2>
                </div>
                <div
                  style={{
                    width: "560px",
                    height: "800px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <iframe
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "1px solid #e6e6e6",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                    }}
                    src="https://yandex.ru/maps-reviews-widget/41291299107?comments"
                    title="Yandex Maps Reviews" // Добавлен title для доступности
                  />
                  <a
                    href="https://yandex.ru/maps/org/chyo_popit_/41291299107/"
                    target="_blank"
                    rel="noopener noreferrer" // Добавлен rel для безопасности
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      color: "#b3b3b3",
                      fontSize: "10px",
                      fontFamily: "YS Text, sans-serif", // Добавлена запятая после шрифта
                      padding: "0 20px",
                      position: "absolute",
                      bottom: "8px",
                      width: "100%",
                      textAlign: "center",
                      left: "0",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "block",
                      maxHeight: "14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Чё попить на карте Москвы — Яндекс Карты
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
