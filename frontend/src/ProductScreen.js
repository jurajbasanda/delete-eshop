import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import data from './data'
import './productscreen.scss'

export default function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id)
    return (
    <Fragment>
        <div className='back-to'><Link to='/'>Back to products</Link></div>
    <div className='details'>
        <div className='details-image'>
        <img src={product.image} alt=""/>
        </div>
        <div className='details-info'>
        <ul>
        <li><h4>{product.name}</h4></li>
        <li>{product.rating} Stars ({product.numReview} Reviews)</li>
        <li>£{product.price}</li>
        <li>Description:<div>{product.description}</div></li>
        </ul>
        </div>
        <div className='details-action'>
        <ul>
        <li>Price:£{product.price}</li>
        <li>Status:{product.status}</li>
        <li>Qty:<select><option value="1">1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                </select>
        </li>
        <li><button className='add-btm'>Add to Cart</button></li>
        </ul>
        </div>
    </div>
    </Fragment>
  );
}
