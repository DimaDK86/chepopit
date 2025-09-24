import React, { useState } from 'react';
import { useGetFirstCatalogQuery } from '../../api/catalogApi';
import Arrow from '../../assets/arrow.png'

const CategorySection = ({ categoryId }: { categoryId: number }) => {
  const { data: firstData } = useGetFirstCatalogQuery();
  const categories = (firstData as any)?.categories || [];
  const category = categories.find((cat: any) => cat.id === categoryId);
  const [isExpanded, setIsExpanded] = useState(false);

  const getProductStatus = (balance: number) => {
    if (balance <= 0) return { text: 'нет в наличии', color: '#ff4444' };
    if (balance >= 1 && balance <= 3) return { text: 'мало', color: '#eeff00ff' };
    if (balance >= 4 && balance <= 6) return { text: 'достаточно', color: '#ffd900ff' };
    if (balance > 7) return { text: 'много', color: '#008800' };
    return { text: 'в наличии', color: '#00aa00' };
  };
  
  if (!category) return <div>Категория с ID {categoryId} не найдена</div>;
  
  return (
    <div>
      <div onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
        <h2>
          <span style={{ padding: "0 10px 0 0" }}>
            <img 
              src={Arrow} 
              alt="Arrow" 
              style={{ 
                width: "20px", 
                height: "20px", 
                transform: isExpanded ? 'rotate(0deg)' : 'rotate(270deg)',
                transition: 'transform 0.3s ease'
              }} 
            />
          </span>
          {category.name} | Товаров: {category.product_count}
        </h2>
      </div>
      
      {isExpanded && (
        <div>
          <div>
            {category.products.map((product: any) => {
              const status = getProductStatus(product.balance); // Вызываем функцию для каждого продукта
              
              return (
                <div key={product.id}>
                  <strong>{product.name}</strong>
                  <br />Цена: {product.price} руб.
                  <br />Остаток: {product.balance} {product.unit}
                  <br />
                  <span style={{ color: status.color, fontWeight: 'bold' }}>
                    {status.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;