import React, { useState, useEffect } from "react";
import {
  useGetFirstCatalogQuery,
  useGetSecondCatalogQuery,
} from "../../api/catalogApi";
import Brands from "../Brands/Brands";
import "./Assortment.scss";
import CategorySection from "../../pages/components/CategorySection";
import CategorySection2 from "../../pages/components/CategorySection2";
import Loader from "../components/Loader";

const Assortment = () => {
  const {
    data: firstData,
    isLoading: firstLoading,
    error: firstError,
    isSuccess: firstSuccess,
  } = useGetFirstCatalogQuery();

  const {
    data: secondData,
    isLoading: secondLoading,
    error: secondError,
    isSuccess: secondSuccess,
  } = useGetSecondCatalogQuery();

  const [activeTab, setActiveTab] = useState("fl"); // 'fl' или 'ka'
  const [showContent, setShowContent] = useState(true);
  const [expandedCategoryId, setExpandedCategoryId] = useState<number | null>(
    null
  );

  // Автоматически скрываем лоадер когда данные загружены
  useEffect(() => {
    if (activeTab === "fl" && firstSuccess) {
      setShowContent(true);
    }
    if (activeTab === "ka" && secondSuccess) {
      setShowContent(true);
    }
  }, [activeTab, firstSuccess, secondSuccess]);

  // Обработчик разворачивания/сворачивания категории
  const handleCategoryToggle = (categoryId: number) => {
    if (expandedCategoryId === categoryId) {
      // Если кликаем на уже развернутую категорию - сворачиваем
      setExpandedCategoryId(null);
    } else {
      // Разворачиваем новую категорию
      setExpandedCategoryId(categoryId);
    }
  };

  // console.log("First catalog data:", firstData);
  const categories = (firstData as any)?.categories || [];
  const categories2 = (secondData as any)?.categories || [];

  return (
    <div className="assortment">
      <Brands />
      <h1>Каталоги товаров</h1>

      {/* Табы */}
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
              {firstLoading ? (
                <Loader />
              ) : (
                <>
                  <CategorySection
                    categoryId={50566}
                    isExpanded={expandedCategoryId === 50566}
                    onToggle={() => handleCategoryToggle(50566)}
                  />
                  <CategorySection
                    categoryId={50567}
                    isExpanded={expandedCategoryId === 50567}
                    onToggle={() => handleCategoryToggle(50567)}
                  />
                  {/* Добавьте другие категории для ФЛ */}
                </>
              )}
            </div>
          )}

          {activeTab === "ka" && (
            <div className="tab-panel">
              {secondLoading ? (
                <Loader />
              ) : (
                <div>
                  <CategorySection2
                    categoryId={50578}
                    isExpanded={expandedCategoryId === 50578}
                    onToggle={() => handleCategoryToggle(50578)}
                  />
                  <CategorySection2
                    categoryId={50577}
                    isExpanded={expandedCategoryId === 50577}
                    onToggle={() => handleCategoryToggle(50577)}
                  />
                  {/* Добавьте другие категории для КА */}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Остальной ваш код */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {/* ... остальной код с каталогами ... */}
      </div>
      {/* <div>
        <h2>Все категории ({categories.length})</h2>
        {categories2.map((category: any) => (
          <div
            key={category.id}
            style={{
              border: "1px solid #eee",
              padding: "15px",
              margin: "10px 0",
              borderRadius: "6px",
            }}
          >
            <h3 style={{ cursor: "pointer" }}>
              {category.name} (ID: {category.id}) - {category.product_count}{" "}
              товаров
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {category.products.slice(0, 3).map((product: any) => (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #f0f0f0",
                    padding: "10px",
                    borderRadius: "4px",
                  }}
                >
                  <strong>{product.name}</strong>
                  <br />
                  Цена: {product.price} руб.
                  <br />
                  Остаток: {product.balance}
                </div>
              ))}
              {category.products.length > 3 && (
                <div style={{ padding: "10px", fontStyle: "italic" }}>
                  ... и еще {category.products.length - 3} товаров
                </div>
              )}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Assortment;
