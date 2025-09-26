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
  // const [showContent, setShowContent] = useState(true);
  const [expandedCategoryId, setExpandedCategoryId] = useState<number | null>(
    null
  );
  const [closingCategoryId, setClosingCategoryId] = useState<number | null>(
    null
  );

  // Автоматически скрываем лоадер когда данные загружены
  // useEffect(() => {
  //   if (activeTab === "fl" && firstSuccess) {
  //     setShowContent(true);
  //   }
  //   if (activeTab === "ka" && secondSuccess) {
  //     setShowContent(true);
  //   }
  // }, [activeTab, firstSuccess, secondSuccess]);

  // Обработчик разворачивания/сворачивания категории с анимацией
  const handleCategoryToggle = (categoryId: number) => {
    if (expandedCategoryId === categoryId) {
      // Запускаем анимацию закрытия
      setClosingCategoryId(categoryId);
      setTimeout(() => {
        setExpandedCategoryId(null);
        setClosingCategoryId(null);
      }, 300); // Должно совпадать с временем transition в SCSS
    } else {
      // Если есть открытая категория, сначала закрываем её с анимацией
      if (expandedCategoryId) {
        setClosingCategoryId(expandedCategoryId);
        setTimeout(() => {
          setExpandedCategoryId(categoryId);
          setClosingCategoryId(null);
        }, 300);
      } else {
        // Просто открываем новую категорию
        setExpandedCategoryId(categoryId);
      }
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
                    isClosing={closingCategoryId === 50566}
                  />
                  <CategorySection
                    categoryId={50567}
                    isExpanded={expandedCategoryId === 50567}
                    onToggle={() => handleCategoryToggle(50567)}
                    isClosing={closingCategoryId === 50567}
                    />
                  <CategorySection
                    categoryId={50662}
                    isExpanded={expandedCategoryId === 50662}
                    onToggle={() => handleCategoryToggle(50662)}
                    isClosing={closingCategoryId === 50662}
                    />
                  <CategorySection
                    categoryId={50663}
                    isExpanded={expandedCategoryId === 50663}
                    onToggle={() => handleCategoryToggle(50663)}
                    isClosing={closingCategoryId === 50663}
                    />
                  <CategorySection
                    categoryId={50664}
                    isExpanded={expandedCategoryId === 50664}
                    onToggle={() => handleCategoryToggle(50664)}
                    isClosing={closingCategoryId === 50664}
                    />
                  <CategorySection
                    categoryId={50665}
                    isExpanded={expandedCategoryId === 50665}
                    onToggle={() => handleCategoryToggle(50665)}
                    isClosing={closingCategoryId === 50665}
                    />
                  <CategorySection
                    categoryId={50666}
                    isExpanded={expandedCategoryId === 50666}
                    onToggle={() => handleCategoryToggle(50666)}
                    isClosing={closingCategoryId === 50666}
                    />
                  <CategorySection
                    categoryId={50667}
                    isExpanded={expandedCategoryId === 50667}
                    onToggle={() => handleCategoryToggle(50667)}
                    isClosing={closingCategoryId === 50667}
                    />
                  <CategorySection
                    categoryId={50668}
                    isExpanded={expandedCategoryId === 50668}
                    onToggle={() => handleCategoryToggle(50668)}
                    isClosing={closingCategoryId === 50668}
                    />
                  <CategorySection
                    categoryId={50669}
                    isExpanded={expandedCategoryId === 50669}
                    onToggle={() => handleCategoryToggle(50669)}
                    isClosing={closingCategoryId === 5066}
                    />
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
                    isClosing={closingCategoryId === 50578}
                  />
                  <CategorySection2
                    categoryId={50577}
                    isExpanded={expandedCategoryId === 50577}
                    onToggle={() => handleCategoryToggle(50577)}
                    isClosing={closingCategoryId === 50577}
                  />
                  <CategorySection2
                    categoryId={50752}
                    isExpanded={expandedCategoryId === 50752}
                    onToggle={() => handleCategoryToggle(50752)}
                    isClosing={closingCategoryId === 50752}
                    />
                  <CategorySection2
                    categoryId={50753}
                    isExpanded={expandedCategoryId === 50753}
                    onToggle={() => handleCategoryToggle(50753)}
                    isClosing={closingCategoryId === 502753}
                    />
                  <CategorySection2
                    categoryId={50754}
                    isExpanded={expandedCategoryId === 50754}
                    onToggle={() => handleCategoryToggle(50754)}
                    isClosing={closingCategoryId === 502754}
                    />
                  <CategorySection2
                    categoryId={50755}
                    isExpanded={expandedCategoryId === 50755}
                    onToggle={() => handleCategoryToggle(50755)}
                    isClosing={closingCategoryId === 502755}
                    />
                  <CategorySection2
                    categoryId={50756}
                    isExpanded={expandedCategoryId === 50756}
                    onToggle={() => handleCategoryToggle(50756)}
                    isClosing={closingCategoryId === 502756}
                    />
                  <CategorySection2
                    categoryId={50757}
                    isExpanded={expandedCategoryId === 50757}
                    onToggle={() => handleCategoryToggle(50757)}
                    isClosing={closingCategoryId === 502757}
                    />
                  <CategorySection2
                    categoryId={50758}
                    isExpanded={expandedCategoryId === 50758}
                    onToggle={() => handleCategoryToggle(50758)}
                    isClosing={closingCategoryId === 502758}
                    />
                  <CategorySection2
                    categoryId={50759}
                    isExpanded={expandedCategoryId === 50759}
                    onToggle={() => handleCategoryToggle(50759)}
                    isClosing={closingCategoryId === 502759}
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
        {categories.map((category: any) => (
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
