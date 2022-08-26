import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import items from '../../asyncMock';
import './Menu.scss'

function Menu (props) {

    return (
        <nav className='navbar'>
              <div className='navbar__searcher'>
                  <Search details={items}/>
              </div>
              <div className='navbar__menu'>
                <ul className='navbar__menu--box'>
                  <li className='navbar__menu--item'>
                    <Link className='navbar__link' onClick={(e) => props.handleClick(e.target)} to='/health'>Health</Link>
                    <ul>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                    </ul>
                  </li>
                  <li className='navbar__menu--item'>
                    <Link className='navbar__link' onClick={(e) => props.handleClick(e.target)} to='/natural-remedies'>Natural Remedies</Link>
                    <ul>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                    </ul>
                  </li>
                  <li className='navbar__menu--item'>
                    <Link className='navbar__link' onClick={(e) => props.handleClick(e.target)} to='/wellness'>Wellnes</Link>
                    <ul>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                    </ul>
                  </li>
                  <li className='navbar__menu--item'>
                    <Link className='navbar__link' onClick={(e) => props.handleClick(e.target)} to='/diet'>Diet</Link>
                    <ul>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                    </ul>
                  </li>
                  <li className='navbar__menu--item'>
                    <Link className='navbar__link' onClick={(e) => props.handleClick(e.target)} to='/recipes'>Recipes</Link>
                    <ul>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                      <li>Primeros Auxilios</li>
                    </ul>
                  </li>
                </ul>
                <ul className='navbar__menu--box'>
                  <li className='navbar__menu--item'>
                    <Link className='navbar__link' onClick={(e) => props.handleClick(e.target)} to='/motherhood'>Motherhood</Link>
                  </li>
                  <li className='navbar__menu--item'>
                    <Link className='navbar__link' onClick={(e) => props.handleClick(e.target)} to='/relationship'>Relationship</Link>
                  </li>
                  <li className='navbar__menu--item'>
                    <Link className='navbar__link' onClick={(e) => props.handleClick(e.target)} to='/fitness'>Fitness</Link>
                  </li>
                  <li className='navbar__menu--item'>
                    <Link className='navbar__link' onClick={(e) => props.handleClick(e.target)} to='/lifestyle'>Lifestyle</Link>
                  </li>
                    {/*social and terms */}
                </ul>
            </div>
        </nav>
    )
}

export default Menu