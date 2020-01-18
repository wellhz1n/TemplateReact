import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaHome, FaUser} from 'react-icons/fa';
const Nav = () => (
    <nav>
        <ul>
            <li>
                <NavLink
                    to="/"
                    isActive={(match, location) => {
                        if (!match) {
                            return false;
                        }
                        return true;
                    }}
                    className='navItem'
                    activeStyle={{ color: '#220070', fontWeight: 'bolder' }}
                    exact={true}
                >
                 <FaHome style={{float:'left'}} />Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/Entrar"
                    isActive={(match, location) => {
                        if (!match) {
                            return false;
                        }
                        return true;
                    }}
                    activeStyle={{ color: '#220070', fontWeight: 'bolder' }}
                    className='navItem'
                >
                    <FaUser style={{float:'left'}} />Login
                </NavLink>
            </li>
        </ul>

        <style jsx>{`
      :global(body) {
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
          
      }
      nav {
        text-align: center;
        border-bottom:0.5px solid black;
        background:purple;
                
      }
      ul {
        display: flex;
        align-content:center;
        justify-content: space-between;
      }
      nav > ul {
        padding: 0px 10px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
  
    `}</style>
    </nav>
)

export default Nav
