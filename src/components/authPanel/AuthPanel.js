import { Link } from 'react-router-dom';

import profile from '../../icons/Profile.svg';
import cart from '../../icons/Cart.svg';

import './authPanel.scss';

const AuthPanel = () => {
    return (
        <div className="auth-panel">
            <div className="auth-panel__greetings">
                <span>Добро пожаловать</span> <br />
                <Link to={ `/login` }>
                    Вход  
                </Link>
                &nbsp;/&nbsp;
                <Link to={ `/signin` }>
                    Регистрация
                </Link>
            </div>
            <Link to={ `/profile` } className="auth-panel__profile">
                <img src={ profile } alt="profile" />
            </Link>
            <div className="auth-panel__divider"></div>
            <Link to={ `/shopping` } className="auth-panel__profile">
                <img src={ cart } alt="cart" />
            </Link>
        </div>       
    )
}

export default AuthPanel;