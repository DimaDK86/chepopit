import React from "react";
import {
  useGetFirstCatalogQuery,
  useGetSecondCatalogQuery,
} from "../../api/catalogApi";

import Brands from "../Brands/Brands";
import "./Assortment.scss";

import CategorySection from '../../pages/components/CategorySection'

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


  console.log('First catalog data:', firstData);
  const categories = (firstData as any)?.categories || [];
  console.log('Categories:', categories);

  // Функция для поиска категории по ID с типами
  const getCategoryById = (id: number) => {
    return categories.find((category: any) => category.id === id);
  };

  // Пример использования
  const categoryId = 21808; // ID категории "АКЦИИ"
  const foundCategory = getCategoryById(categoryId);

  console.log('Найденная категория:', foundCategory);
  console.log('Название категории:', foundCategory?.name);
  console.log('Продукты категории:', foundCategory?.products);

  return (
    <div className="assortment">
      <Brands />
      <h1>Каталоги товаров</h1>

      <div>
        <div>
          <CategorySection categoryId={50566}/>
          <CategorySection categoryId={50567}/>
        </div>
      </div>





      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Первый каталог */}
        <section
          style={{
            flex: 1,
            minWidth: "300px",
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h2>Каталог 4819/38</h2>

          {firstLoading && <div>Загрузка первого каталога...</div>}

          {firstError && (
            <div style={{ color: "red" }}>
              Ошибка:{" "}
              {firstError instanceof Error
                ? firstError.message
                : "Неизвестная ошибка"}
            </div>
          )}

          {firstSuccess && firstData && (
            <div>
              <h3>Данные получены успешно!</h3>
              <div
                style={{
                  maxHeight: "400px",
                  overflow: "auto",
                  backgroundColor: "#f5f5f5",
                  padding: "10px",
                  borderRadius: "4px",
                }}
              >
                <pre>{JSON.stringify(firstData, null, 2)}</pre>
              </div>
              <p>
                Количество элементов:{" "}
                {Array.isArray(firstData) ? firstData.length : "Не массив"}
              </p>
            </div>
          )}
        </section>

        {/* Второй каталог */}
        <section
          style={{
            flex: 1,
            minWidth: "300px",
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
          }}
          >
          <h2>Каталог 3283/36</h2>

          {secondLoading && <div>Загрузка второго каталога...</div>}

          {secondError && (
            <div style={{ color: "red" }}>
              Ошибка:{" "}
              {secondError instanceof Error
                ? secondError.message
                : "Неизвестная ошибка"}
            </div>
          )}

          {secondSuccess && secondData && (
            <div>
              <h3>Данные получены успешно!</h3>
              <div
                style={{
                  maxHeight: "400px",
                  overflow: "auto",
                  backgroundColor: "#f5f5f5",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                >
                <pre>{JSON.stringify(secondData, null, 2)}</pre>
              </div>
              <p>
                Количество элементов:{" "}
                {Array.isArray(secondData) ? secondData.length : "Не массив"}
              </p>
            </div>
          )}
        </section>
      </div>

      <div>
        <h2>Все категории ({categories.length})</h2>
        {categories.map((category: any) => (
          <div key={category.id} style={{ border: '1px solid #eee', padding: '15px', margin: '10px 0', borderRadius: '6px' }}>
            <h3 style={{ cursor: 'pointer' }}>
              {category.name} (ID: {category.id}) - {category.product_count} товаров
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '10px', marginTop: '10px' }}>
              {category.products.slice(0, 3).map((product: any) => (
                <div key={product.id} style={{ border: '1px solid #f0f0f0', padding: '10px', borderRadius: '4px' }}>
                  <strong>{product.name}</strong>
                  <br />
                  Цена: {product.price} руб.
                  <br />
                  Остаток: {product.balance}
                </div>
              ))}
              {category.products.length > 3 && (
                <div style={{ padding: '10px', fontStyle: 'italic' }}>
                  ... и еще {category.products.length - 3} товаров
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Assortment;
