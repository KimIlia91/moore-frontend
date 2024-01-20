import { Link } from 'react-router-dom';

import './promoItem.scss';

const PromoItem = ({ img, name }) => {
  
    return (
        <>
            {
                name !== "" 
                    ? <Link to={ `/promo/${name}` } className="promo-item">
                        <img src={ img } alt={ name } className='promo-item__img'/>
                        <div className="promo-item__name">{ name }</div>
                      </Link>
                    : <div className="promo-item">
                        <div className='promo-item__img-empty'></div>
                        <div className="promo-item__name-empty"></div>
                      </div>
            }
        </>
    )
}

export default PromoItem;