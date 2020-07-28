import React, { Fragment,useState } from 'react';
import {Link} from 'react-router-dom'
//Style
import './Navbar.scss'
//images
import search from './images/search.svg'
import basket from './images/shopping-cart.svg'
import user from './images/user.svg'

export default function Navbar() {
  const [Menu,setMenu] = useState('')
  const openMenu = () =>{ (Menu === '') ? setMenu('open') :  setMenu('')}
  return (
    <Fragment>
    <header>
    <nav className='desktop'>
    <div className='logo'><Link to='/'>DELETE</Link></div>
    <ul className='menu-group'>
    <li><Link to='/'>Home</Link></li>
    <li><button onClick={openMenu} tabIndex='0' onKeyDown={openMenu}>Items</button></li>
    <li><Link>Contact</Link></li>
    </ul>
    <ul className='menu-buttons'>
    <li><img src={search} alt=""/></li>
    <li><img src={user} alt=""/></li>
    <li><img src={basket} alt=""/></li>
    </ul>
    </nav>
    <nav className='mobile'>
    <div className='logo'><Link to='/'>DELETE</Link></div>
    <ul className='menu-group'>
    <li><Link to='/'>Home</Link></li>
    <li><Link>Items</Link></li>
    <li><Link>Contact</Link></li>
    </ul>
    <ul className='menu-buttons'>
    <li><img src={search} alt=""/></li>
    <li><img src={user} alt=""/></li>
    <li><img src={basket} alt=""/></li>
    </ul>
    </nav>
    </header>
    {/*Side-bar-------------------------------------------*/}
    <aside className={`sidebar ${Menu}`}>
    <ul>
    <li onClick={openMenu}><Link>Shirts</Link></li>
    <li onClick={openMenu}><Link>Pants</Link></li>
    <li onClick={openMenu}><Link>Suits</Link></li>
    </ul>
    </aside>
    </Fragment>
  );
}
