import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import menuButton from '../../assets/menu-button.png'

const Header = (props) => {

    const [menuOpened, setMenuOpened] = useState(false);

    const menuToggle = () =>{
        setMenuOpened (!menuOpened);
    };
    

    return (
        <header>
            <div className="container">
                <div className="menu--opner"onClick={menuToggle}>
                    <img src={menuButton} />
                </div>
                <div className="logo">
                    <span className="logo-1">O</span>
                    <span className="logo-2">L</span>
                    <span className="logo-3">X</span>
                    
                </div>
                <nav className={menuOpened ? 'opened' : ''}>
                    <ul>
                        {props.user.logged &&
                            <li>
                                <Link to="/minha-conta">Minha Conta</Link>
                            </li>
                        }
                        
                        {props.user.logged === false &&
                            <>
                                <li>
                                   <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/registrar">Registrar</Link>
                                </li>
                            </>
                        }

                        <li>
                           <Link to="/poste-um-anuncio" className="link--button">Poste um anúncio</Link>
                        </li>
                        
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;
