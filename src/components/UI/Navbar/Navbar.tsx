import { Link, NavLink, useSearchParams } from 'react-router-dom';
import './Navbar.scss';
import { useState } from 'react';

export const Navbar = () => {
  const [searchParams] = useSearchParams();
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  return (
    <>
      <nav className='header__nav'>
        <button
          className='header__nav-menu'
          onClick={() => setIsShowingMenu(true)}
        />
        <ul className='header__nav-list'>
          <li className='header__nav-list-item'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'header__nav-list-item-link--active'
                  : 'header__nav-list-item-link'
              }
              to={{
                pathname: '/',
                search: searchParams.toString(),
              }}
            >
              Home
            </NavLink>
          </li>
          <li className='header__nav-list-item'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'header__nav-list-item-link--active'
                  : 'header__nav-list-item-link'
              }
              to={{
                pathname: '/warehouses',
                search: searchParams.toString(),
              }}
            >
              Warehouses
            </NavLink>
          </li>
        </ul>
      </nav>
      <aside id="menu" className={!isShowingMenu ? 'aside' : 'aside active'}>
        <div className='aside-container'>
          <button className="aside__button" onClick={() => setIsShowingMenu(false)} />
          <div className='aside__line' />
          <Link className='aside__link' onClick={() => setIsShowingMenu(false)} to='/'>Home</Link>
          <div className='aside__line' />
          <Link className='aside__link' onClick={() => setIsShowingMenu(false)} to='/warehouses'>Warehouses</Link>
          <div className='aside__line' />
        </div>
      </aside>
    </>
  );
};
