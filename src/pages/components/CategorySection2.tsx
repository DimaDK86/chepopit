import React, {useRef, useEffect} from 'react';
import { useGetSecondCatalogQuery } from "../../api/catalogApi";
import Arrow from "../../assets/arrow.png";
import "./CategorySection.scss"; // можно использовать те же стили

interface CategorySection2Props {
  categoryId: number;
  isExpanded: boolean;
  isClosing: boolean;
  onToggle: () => void;
}

const CategorySection2 = ({
  categoryId,
  isExpanded,
  onToggle,
  isClosing,
}: CategorySection2Props) => {
  const { data: secondData } = useGetSecondCatalogQuery();
  const categories = (secondData as any)?.categories || [];
  const category = categories.find((cat: any) => cat.id === categoryId);

  const getProductStatus = (balance: number) => {
    if (balance <= 0) return { text: 'нет в наличии', color: '#ff4444' };
    if (balance >= 1 && balance <= 3) return { text: 'мало', color: '#eeff00ff' };
    if (balance >= 4 && balance <= 6) return { text: 'достаточно', color: '#ffd900ff' };
    if (balance > 7) return { text: 'много', color: '#008800' };
    return { text: 'в наличии', color: '#00aa00' };
  };

  // Ref для заголовка категории
  const headerRef = useRef<HTMLDivElement>(null);

  // Фокусируемся на заголовке при разворачивании
  useEffect(() => {
    if (isExpanded && headerRef.current) {
      // Небольшая задержка для плавности анимации
      setTimeout(() => {
        headerRef.current?.focus();
      }, 100);
    }
  }, [isExpanded]);

  if (!category) return <div>Категория с ID {categoryId} не найдена</div>;

  return (
    <div className="category-section">
      <div
        ref={headerRef} // ✅ Добавьте ref сюда
        tabIndex={0} // ✅ Делаем элемент фокусируемым
        onClick={onToggle}
        style={{ cursor: "pointer", outline: "none" }}
        className="category-header"
        aria-expanded={isExpanded}
      >
        <h2 className="categoryItemName">
          <span style={{ padding: "0 10px 0 0" }}>
            <img
              src={Arrow}
              alt={isExpanded ? "Свернуть категорию" : "Развернуть категорию"} 
              className={`category-arrow ${
                isExpanded ? "expanded" : "collapsed"
              }`}
            />
          </span>
          {category.name} | Товаров: {category.product_count}
        </h2>
      </div>

      <div 
        className={`category-content ${isExpanded ? "expanded" : ""} ${isClosing ? "closing" : ""}`}
        aria-hidden={!isExpanded}
      >
        <div className="products-list">
          {category.products.map((product: any) => {
            const status = getProductStatus(product.balance);
            
            return (
              <div className='categoryProductName' key={product.id}>
                <strong>{product.name}</strong>
                <br />Цена: {product.price} руб.
                <br />
                <span style={{ color: status.color, fontWeight: 'bold' }}>
                  {status.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySection2;
