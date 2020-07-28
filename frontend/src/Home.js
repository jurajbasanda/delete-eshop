import React from 'react';
import { Link } from 'react-router-dom';
//Style
import './home.scss'
//data
import data from './data'

export default function Home() {
  return (
    <div className='content'>

        <ul className='products'>
        {data.products.map(product =>
          <li className='product' key={product.name}>
          <Link to={`/product/${product._id}`}><img src={product.image} alt=""/></Link>
          <div className='product-name'><Link to={`/product/${product._id}`}>{product.name}</Link></div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">£{product.price}</div>
          <div className="product-rating">{product.rating} Stars ({product.numReview} Reviews)</div>
          </li>  )}
        </ul>
    </div>
  );
}
