import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AuthPanel from '../authPanel/AuthPanel';
import SearchBar from '../searchBar/SearchBar';
import useGoodsService from '../../services/GoodsService';

import img from '../../icons/logo.svg';
import catalogImg from '../../icons/catalog.svg';

import './header.scss';


const Header = () => {

    const [ catalog, setCatalog ] = useState([]);

    const { getCatalogItem } = useGoodsService();

    /* eslint-disable */
    useEffect(() => {
        onRequest();
    }, []);
    /* eslint-disable */
    
    const onRequest = () => {
        onCatalogLoaded(getCatalogItem());
    }

    const onCatalogLoaded = (catalogItems) => {
        setCatalog(catalogItems);
    }

    const dropDownElements = renderDropDownElements(catalog);

    return (
        <header className='header'>
            <div className="app-container">
                <div className="header__wrapper">
                    <Link to={ `/about` }>
                        <img src={ img } alt="logo" className='header__logo'/>
                    </Link>
                    <div className="header__main">
                        <Dropdown className='header__catalog'>
                            <Dropdown.Toggle>
                                <img src={ catalogImg } alt='catalog-icon' className="header__catalog-img"/>
                                <div className="header__catalog-text">Каталог</div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                { dropDownElements }
                            </Dropdown.Menu>
                        </Dropdown>   
                        <SearchBar />
                        <AuthPanel />         
                    </div>
                </div>
            </div>
        </header>
    )
}

function renderDropDownElements(items) {
    return (
        items.map(item => {
            return (
                <Dropdown.Item key={ item.id } href={ `/catalog/${item.name}` }>
                    { item.name }
                </Dropdown.Item>
            )
        })
    )
}

export default Header;