import cartLogo from '../../icons/cart-logo.svg';
import Section from '../section/Section';
import arrow from '../../icons/arrow-up.svg';
import location from '../../icons/Location.svg';
import clock from '../../icons/clock.svg';
import phone from '../../icons/phone.svg';

import './addresses.scss';

const Addresses = () => {
    return (
        <section className='addresses'>
            <Section
                title={ 'Адреса магазинов' }
            >
                <ul className="addresses-list">
                    <li className='addresses-item'>
                        <div className="addresses-item__header">
                            <img src={ cartLogo } alt="cart logo" />
                            <div className="addresses-item__title">
                                <div className="addresses-item__text">Iskender home</div>
                                <a href="https://maps.app.goo.gl/FJX5pmajkXN46awq7">открыть в карте</a>
                            </div>
                        </div>
                        <img src={ arrow } alt="arrow" className='addresses-item__arrow'/>
                        <div className="addresses__divider"></div>
                        <div className="addresses__location">
                            <img src={ location } alt="location" />
                            <div className="addresses__text">
                                Кыргызстан, г. Бишкек <br />
                                ул. Турусбекова A167
                            </div>
                        </div> 
                        <div className="addresses__footer">
                            <div className="addresses__time">
                                <img src={ clock } alt="clock" />
                                <div className="addresses__text">
                                    08:00 - 22:00
                                </div>
                            </div>
                            <div className="addresses__phone">
                                <img src={ phone } alt="phone" />
                                <div className="addresses__text">
                                    +996 500 345 345
                                </div>
                            </div>
                        </div> 
                    </li>
                    <li className='addresses-item'>
                        <div className="addresses-item__header">
                            <img src={ cartLogo } alt="cart logo" />
                            <div className="addresses-item__title">
                                <div className="addresses-item__text">Iskender home</div>
                                <a href="https://maps.app.goo.gl/md3psMmEAG7xqoXN7">открыть в карте</a>
                            </div>
                        </div>
                        <img src={ arrow } alt="arrow" className='addresses-item__arrow'/>
                        <div className="addresses__divider"></div>
                        <div className="addresses__location">
                            <img src={ location } alt="location" />
                            <div className="addresses__text">
                                Кыргызстан, г. Бишкек <br />
                                ул. Лермонтова 6
                            </div>
                        </div> 
                        <div className="addresses__footer">
                            <div className="addresses__time">
                                <img src={ clock } alt="clock" />
                                <div className="addresses__text">
                                    08:00 - 22:00
                                </div>
                            </div>
                            <div className="addresses__phone">
                                <img src={ phone } alt="phone" />
                                <div className="addresses__text">
                                    +996 500 345 345
                                </div>
                            </div>
                        </div> 
                    </li>
                    <li className='addresses-item'>
                        <div className="addresses-item__header">
                            <img src={ cartLogo } alt="cart logo" />
                            <div className="addresses-item__title">
                                <div className="addresses-item__text">Iskender home</div>
                                <a href="https://maps.app.goo.gl/ds8vdHDJHfVFk4qM9">открыть в карте</a>
                            </div>
                        </div>
                        <img src={ arrow } alt="arrow" className='addresses-item__arrow'/>
                        <div className="addresses__divider"></div>
                        <div className="addresses__location">
                            <img src={ location } alt="location" />
                            <div className="addresses__text">
                                Кыргызстан, г. Бишкек <br />
                                ул. Льва-Толстого 19
                            </div>
                        </div> 
                        <div className="addresses__footer">
                            <div className="addresses__time">
                                <img src={ clock } alt="clock" />
                                <div className="addresses__text">
                                    08:00 - 22:00
                                </div>
                            </div>
                            <div className="addresses__phone">
                                <img src={ phone } alt="phone" />
                                <div className="addresses__text">
                                    +996 500 345 345
                                </div>
                            </div>
                        </div> 
                    </li>
                </ul>
            </Section>
        </section>
    )
}

export default Addresses;