import React from 'react';
import { useGetFirstCatalogQuery, useGetSecondCatalogQuery } from '../../api/catalogApi'

import Brands from "../Brands/Brands";
import './Assortment.scss'

const Assortment = () => {
    const { 
    data: firstData, 
    isLoading: firstLoading, 
    error: firstError,
    isSuccess: firstSuccess
  } = useGetFirstCatalogQuery()

  const { 
    data: secondData, 
    isLoading: secondLoading, 
    error: secondError,
    isSuccess: secondSuccess
  } = useGetSecondCatalogQuery()
    return (
        <div className='assortment'>
            <Brands />
            <h1>Каталоги товаров</h1>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* Первый каталог */}
        <section style={{ flex: 1, minWidth: '300px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h2>Каталог 4819/38</h2>
          
          {firstLoading && <div>Загрузка первого каталога...</div>}
          
          {firstError && (
            <div style={{ color: 'red' }}>
              Ошибка: {firstError instanceof Error ? firstError.message : 'Неизвестная ошибка'}
            </div>
          )}
          
          {firstSuccess && firstData && (
            <div>
              <h3>Данные получены успешно!</h3>
              <div style={{ 
                maxHeight: '400px', 
                overflow: 'auto', 
                backgroundColor: '#f5f5f5', 
                padding: '10px',
                borderRadius: '4px'
              }}>
                <pre>{JSON.stringify(firstData, null, 2)}</pre>
              </div>
              <p>Количество элементов: {Array.isArray(firstData) ? firstData.length : 'Не массив'}</p>
            </div>
          )}
        </section>

        {/* Второй каталог */}
        <section style={{ flex: 1, minWidth: '300px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h2>Каталог 3283/36</h2>
          
          {secondLoading && <div>Загрузка второго каталога...</div>}
          
          {secondError && (
            <div style={{ color: 'red' }}>
              Ошибка: {secondError instanceof Error ? secondError.message : 'Неизвестная ошибка'}
            </div>
          )}
          
          {secondSuccess && secondData && (
            <div>
              <h3>Данные получены успешно!</h3>
              <div style={{ 
                maxHeight: '400px', 
                overflow: 'auto', 
                backgroundColor: '#f5f5f5', 
                padding: '10px',
                borderRadius: '4px'
              }}>
                <pre>{JSON.stringify(secondData, null, 2)}</pre>
              </div>
              <p>Количество элементов: {Array.isArray(secondData) ? secondData.length : 'Не массив'}</p>
            </div>
          )}
        </section>
      </div>
        </div>
    );
};

export default Assortment;