import React, { useState, useEffect } from 'react';
import './App.scss';

const MyComponent = () => {
    const [showSale, setShowSale] = useState(false);
    const [deliveryOption, setDeliveryOption] = useState('1-hour');
    const [products, setProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);

    const categoryOptions = ['Кеды', 'Кроссовки', 'Слипоны', 'Сандалии', 'Ботинки', 'Туфли'];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleSaleToggle = () => {
        setShowSale(!showSale);
    };

    const handleDeliveryOptionChange = (event) => {
        setDeliveryOption(event.target.value);
    };

    const handleCategoryFilterChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setCategoryFilter([...categoryFilter, value]);
        } else {
            setCategoryFilter(categoryFilter.filter((category) => category !== value));
        }
    };

    const shoesNames = [
        'Nike Air Force 1',
        'Adidas Superstar',
        'Reebok Classic',
        'Converse Chuck Taylor',
        'Asics Gel-Kayano',
        'New Balance 574',
        'Puma Suede',
        'Vans Old Skool',
        'Saucony Ride ISO',
        'Sketchers Go Walk'
    ];

    const brandLogos = {
        'Nike': 'https://example.com/nike-logo.png',
        'Reebok': 'https://example.com/reebok-logo.png',
        'Adidas': 'https://example.com/adidas-logo.png',
        'Adidas Originals': 'https://example.com/adidas-originals-logo.png',
        'Sportswear': 'https://example.com/sportswear-logo.png',
        'Time Jump': 'https://example.com/time-jump-logo.png',
        'Patrol': 'https://example.com/patrol-logo.png'
    };

    return (
        <div className="my-component">
            <div className="layout-grid">
                <div className="top-section">
                    <h1>Кеды,кроссовки и слипоны мужские</h1>
                </div>
                <div className="shoes-list">
                    {shoesNames.map((name, index) => (
                        <button key={index} className="oval-button">{name}</button>
                    ))}
                </div>
                <div className="left-side">
                    <div className="category">
                        <h2 style={{ marginRight: '10px' }}>Категория</h2>
                        <select value={categoryFilter} onChange={handleCategoryFilterChange}>
                            <option value="">Все</option>
                            {categoryOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                        <p>обувь</p>
                        <p>мужчины</p>
                        <div>
                            <p style={{ color: 'black', fontWeight: 'bold' }}>Распродажа
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                            </p>
                        </div>
                    </div>
                    <div className="delivery-options">
                        <h2>Сроки доставки</h2>
                        <div className="radio-options">
                            <div className="radio-option">
                                <input type="radio" name="delivery-option" value="1-hour" checked={deliveryOption === '1-hour'} onChange={handleDeliveryOptionChange} />
                                <label>неважно</label>
                            </div>
                            <div className="radio-option">
                                <input type="radio" name="delivery-option" value="same-day" checked={deliveryOption === 'same-day'} onChange={handleDeliveryOptionChange} />
                                <label>от 1 часа</label>
                            </div>
                            <div className="radio-option">
                                <input type="radio" name="delivery-option" value="next-day" checked={deliveryOption === 'next-day'} onChange={handleDeliveryOptionChange} />
                                <label>Сегодня</label>
                            </div>
                            <div className="radio-option">
                                <input type="radio" name="delivery-option" value="2-days" checked={deliveryOption === '2-days'} onChange={handleDeliveryOptionChange} />
                                <label>Завтра</label>
                            </div>
                            <div className="radio-option">
                                <input type="radio" name="delivery-option" value="3-days" checked={deliveryOption === '3-days'} onChange={handleDeliveryOptionChange} />
                                <label>До 3 дней</label>
                            </div>
                            <div className="radio-option">
                                <input type="radio" name="delivery-option" value="4-days" checked={deliveryOption === '4-days'} onChange={handleDeliveryOptionChange} />
                                <label>До 7 дней</label>
                            </div>
                        </div>
                    </div>
                    <div className="brands">
                        <div>
                            <div className="brands">
                                <h2>Бренды</h2>
                                <div className="brand-logo">
                                    <img src="https://abrakadabra.fun/uploads/posts/2022-01/1641364097_23-abrakadabra-fun-p-znachok-naik-chernii-42.jpg" alt="Nike" />
                                    <span>Nike</span>
                                </div>
                                <div className="brand-logo">
                                    <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Reebok-Simbolo.png" alt="Reebok" />
                                    <span>Reebok</span>
                                </div>
                                <div className="brand-logo">
                                    <img src="https://sportrostov.ru/upload/iblock/484/zbwp92tefnfm0va2oezyyq2zhos6mw8f.jpg" alt="Adidas" />
                                    <span>Adidas</span>
                                </div>
                                <div className="brand-logo">
                                    <img src="https://static.vecteezy.com/system/resources/previews/010/994/239/original/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="Adidas Originals" />
                                    <span>Adidas Originals</span>
                                </div>
                                <div className="brand-logo">
                                    <img src="https://pixy.org/src/131/1313734.jpg" alt="Sportswear" />
                                    <span>Sportswear</span>
                                </div>
                                <div className="brand-logo">
                                    <img src="https://s.rbk.ru/v1_companies_s3/resized/1200xH/media/trademarks/baabf4fc-5d78-4b49-ae39-11b3821de232.jpg" alt="Time Jump" />
                                    <span>Time Jump</span>
                                </div>
                                <div className="brand-logo">
                                    <img src="https://images.squarespace-cdn.com/content/500f3b06c4aa4db025ced9e8/1398527481993-TMXP1EJE7FHPPD2WFDTZ/snow_patrol.png?content-type=image%2Fpng" alt="Patrol" />
                                    <span>Patrol</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <p style={{ color: 'black', fontWeight: 'bold' }}>Расcрочка 0%
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                            </p>
                        </div>
                    <div className="prices">
                        <h2>Цены</h2>
                        <div className="price-inputs">
                            <input type="text" placeholder="От" />
                            <input type="text" placeholder="До" />
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="product-grid">
                        {products.map((product, index) => (
                            <div key={index} className="product-card">
                                <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px' }} />
                                <h3>{product.title}</h3>
                                <p>Цена: {product.price} руб.</p>
                                <button className="sale-button">-15% по промокоду</button>
                                <div className="rating">
                                    <span>Рейтинг 4.2</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;