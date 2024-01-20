import logo from '../../icons/logo.svg';
import facebook from '../../icons/facebook.svg';
import instagram from '../../icons/instagram.svg';
import google from '../../icons/google.svg';
import apple from '../../icons/apple.svg';
import whatsapp from '../../icons/whatsapp.svg';

import './footer.scss';

 /*eslint-disable*/
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="app-container">
                <div className="footer__wrapper">
                    <section className="footer__main">
                        <img src={ logo } alt="logo" className='footer__logo'/>
                        <h1 className="footer__title">
                            Первый отечественный бренд Iskender на рынке сантехники от компании ОсОО «Стройдом.кг»
                        </h1>
                        <div className="footer__download">
                            <a href="#">
                                <img src={ apple } alt="appstore" className='footer__appstore' />
                            </a>
                            <a href="#">
                                <img src={ google } alt="playmarket" className='footer__playmarket'/>
                            </a>
                        </div>
                    </section>
                    <address className='footer__addresses'>
                        <div className="footer__list">
                            <div className="footer__subtitle">Адреса</div>
                            <div className="footer__sublist">
                                <div className="footer__item">
                                    <div className="footer__name">ЭлитСтрой</div>
                                    <div className="footer__descr">ул. Ден-Сяопина 18/1</div>
                                </div>
                                <div className="footer__item">
                                    <div className="footer__name">Баткен</div>
                                    <div className="footer__descr">ул. Льва-Толстого 19</div>
                                </div>
                                <div className="footer__item">
                                    <div className="footer__name">ТааТан</div>
                                    <div className="footer__descr">ул. Лермонтова 6</div>
                                </div>
                            </div>
                        </div>
                    </address>
                    <section className='footer__comapny'>
                        <div className="footer__list">
                                <div className="footer__subtitle">Компания</div>
                                <div className='footer__sublist footer__sublist_company'>
                                    <a href='#' className="footer__name">Каталог</a>
                                    <a href='#' className="footer__name">Избранное</a>
                                    <a href='#' className="footer__name">Личный кабинет</a>
                                </div>
                        </div>
                    </section>
                    <section className='footer__contacts'>
                        <div className="footer__list">
                            <div className="footer__subtitle">Контакты</div>
                            <div className="footer__item">
                                <div className="footer__name">Email:</div>
                                <a href='mailto:iskender.kg@gmail.com' className="footer__descr">iskender.kg@gmail.com</a>
                            </div>
                            <div className="footer__item">
                                <div className="footer__name">Телефон:</div>
                                <div className="footer__descr footer__descr_phones">
                                    <a href="#">+996 (500) 000-104</a> <br />
                                    <a href="#">+996 (997) 000-104</a><br />
                                    <a href="#">+996 (222) 000-104</a><br />
                                </div>
                            </div>
                            <a href='#' className="footer__link">
                                <img src={ whatsapp } alt="whatsapp" />
                                <div className="footer__link-text">WhatsApp</div>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="footer__divider"></div>
                <div className="footer__basement">
                    <div className="footer__brend">© 2023 Iskender.kg - Отечественный бренд сантехники</div>
                    <div className="footer__social">
                        <a href="#">
                            <img src={ instagram } alt="instagram" />
                        </a>
                        <a href="#">
                            <img src={ facebook } alt="facebook" />
                        </a>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}
/*eslint-disable*/

export default Footer;