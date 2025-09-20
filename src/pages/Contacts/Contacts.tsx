import React from 'react';
import './Contacts.scss';

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className="maps">
                <h2>ЖК Саларьево Парк (метро Филатов Луг)</h2>
                <div className="map">
                    <div style={{
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=37.416580%2C55.601284&mode=search&oid=135224636907&ol=biz&z=16.48"
                            width="700px"
                            height="500px"
                            allowFullScreen
                            style={{position: 'relative', border: 'none'}}
                            title="Карта расположения Чё попить"></iframe>
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
                <h2>ЖК Кленовые Аллеи (Троицк / Ватутинки)</h2>
                <div className="map">
                    <div style={{
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=37.346762%2C55.507830&mode=search&oid=41291299107&ol=biz&z=16.48"
                            width="700px"
                            height="500px"
                            allowFullScreen
                            style={{position: 'relative', border: 'none'}}
                            title="Карта расположения Чё попить"></iframe>
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
        </div>
    );
};

export default Contacts;