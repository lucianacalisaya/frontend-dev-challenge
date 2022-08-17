import './Navbar.scss';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import items from '../../asyncMock';

const Navbar = () => {
    
    return (
      <nav>
        <div className='navbar'>
          <div className='container navbar__container'>
              <input className='checkbox' type='checkbox'/>
              <div className='navbar__hamburgerLines'>
                <span className='line line1'></span>
                <span className='line line2'></span>
                <span className='line line3'></span>
              </div>  
            <div className='navbar__logo'>
              <Link to='/'><img src='resources/images/logo__ES-1.svg' alt=''/></Link>
            </div>
            <div className='navbar__menu'>
              <div className='navbar__searcher'>
                  <Search details={items}/>
              </div>
              <div className='navbar__menuContainer'>
                <ul className='navbar__menuContainerBox navbar__menuContainerBox--left'>
                  <li className='navbar__menuItem'>
                    <Link to='/health'>Health</Link>
                  </li>
                  <li className='navbar__menuItem'>
                    <Link to='/natural-remedies'>Natural Remedies</Link>
                  </li>
                  <li className='navbar__menuItem'>
                    <Link to='/wellness'>Wellnes</Link>
                  </li>
                  <li className='navbar__menuItem'>
                    <Link to='/diet'>Diet</Link>
                  </li>
                  <li className='navbar__menuItem'>
                    <Link to='/recipes'>Recipes</Link>
                  </li>
                </ul>
                <ul className='navbar__menuContainerBox navbar__menuContainerBox--right'>
                  <li className='navbar__menuItem'>
                    <Link to='/motherhood'>Motherhood</Link>
                  </li>
                  <li className='navbar__menuItem'>
                    <Link to='/relationship'>Relationship</Link>
                  </li>
                  <li className='navbar__menuItem'>
                    <Link to='/fitness'>Fitness</Link>
                  </li>
                  <li className='navbar__menuItem'>
                    <Link to='/lifestyle'>Lifestyle</Link>
                  </li>
                    {/*social and terms */}
                </ul>
              </div>
            </div>
            <div className='navbar__searchIcon'>
              <button className='navbar__searchIcon-button'>
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16665 18C10.8588 18 12.4144 17.365 13.6556 16.312L17.6852 20.708L18.9814 19.294L14.9517 14.898C15.9179 13.543 16.5 11.846 16.5 10C16.5 5.589 13.2101 2 9.16665 2C5.12323 2 1.83331 5.589 1.83331 10C1.83331 14.411 5.12323 18 9.16665 18ZM9.16665 4C12.1999 4 14.6666 6.691 14.6666 10C14.6666 13.309 12.1999 16 9.16665 16C6.1334 16 3.66665 13.309 3.66665 10C3.66665 6.691 6.1334 4 9.16665 4Z" fill="black"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;