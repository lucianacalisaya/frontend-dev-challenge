import './Navbar.scss';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import items from '../../asyncMock';

const Navbar = () => {
    
    return (
        <nav>
      <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
            <Link to='/'><img src='resources/images/logo__ES-1.svg' alt=''/></Link>
          </div>
          <div class="menu-items">
            <div>
                <Search details={items}/>
            </div>
            <div>
                <Link to='/health'>Health</Link>
                <Link to='/natural-remedies'>Natural Remedies</Link>
                <Link to='/wellness'>Wellnes</Link>
                <Link to='/diet'>Diet</Link>
                <Link to='/recipes'>Recipes</Link> 
            </div>
            <div>
                <Link to='/motherhood'>Motherhood</Link>
                <Link to='/relationship'>Relationship</Link>
                <Link to='/fitness'>Fitness</Link>
                <Link to='/lifestyle'>Lifestyle</Link>
                {/*social and terms */}
            </div>

          </div>
        </div>
      </div>
    </nav>
        // <nav>
        //     <div className="navbar">
        //         <div className="navbar__header container nav-container">
        //             <div className='navbar__hamburger'>
        //                <input className="navbar__hamburger-input" type="checkbox"/>
        //                <div className="navbar__hamburger-lines">
        //                     <span className="navbar__hamburger-line navbar__hamburger-line1"></span>
        //                     <span className="navbar__hamburger-line navbar__hamburger-line2"></span>
        //                     <span className="navbar__hamburger-line navbar__hamburger-line3"></span>
        //                 </div>  
        //             </div>
                    
        //             <div className="navbar__logo">
        //                 <Link to='/' className="navbar__logo-link"><img className='navbar__logo-image' src='resources/images/logo__ES-1.svg' alt=''/></Link>
        //             </div>
        //             <div className="navbar__menu">
        //                 <li className='navbar__menu-item'><Link className='navbar__menu-link' to='/'>Home</Link></li>
        //                 <li className='navbar__menu-item'><Link className='navbar__menu-link' to=''>about</Link></li>
        //                 <li className='navbar__menu-item'><Link className='navbar__menu-link' to=''>blogs</Link></li>
        //                 <li className='navbar__menu-item'><Link className='navbar__menu-link' to=''>portfolio</Link></li>
        //                 <li className='navbar__menu-item'><Link className='navbar__menu-link' to=''>contact</Link></li>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    );
}

export default Navbar;