import { Link } from 'react-router-dom';
import './catalogItem.scss';

const CatalogItem = ({ name, count, img }) => {
    return (
        <Link to={ `/catalog/${name}` } className='catalog-item'>
            <h3 className="catalog-item__name">{ name }</h3>
            <div className="catalog-item__count">{ count } товаров</div>
            <img src={ img }  alt={ name } fetchpriority="high" />
        </Link>
        
    )
}

export default CatalogItem;