import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import heartFill from '../../icons/heart-fill.svg';
import heart from '../../icons/heart.svg';
import elipseActive from '../../icons/elipse.svg';
import elipseDisable from '../../icons/elipse-disable.svg';
import minus from '../../icons/minus.svg';
import plus from '../../icons/plus.svg';

import './item.scss';

const Item = memo(({ id, name, oldPrice, price, img, stock, set, favorite, onChangeFavorite }) => {
    return(
        <div key={ id } className='item'>
            <div className="item__img">
                <Link to={ `/product/${id}` } tabIndex={-1}>
                    <img src={ img } alt={ name } fetchpriority="high" />
                </Link>
                <div className="item__icon">
                    {
                        favorite 
                            ? <img src={ heartFill } alt='heart-fill' onClick={() => onChangeFavorite(id, favorite) }/> 
                            : <img src={ heart } alt='heart' onClick={() => onChangeFavorite(id, favorite) }/>
                    }
                </div>
            </div>
            <h3 className="item__title">{ name }</h3>
            <div className="item__body">
                {
                    oldPrice 
                        ?   <div className="item__price">
                                <div className="item__price-new">{ price } c</div>
                                <div className="item__price-old">{ oldPrice } c</div>
                            </div>
                        :   <div className="item__price">{ price } c</div>
                }
                <div className="item__stock">{ stock ? 'В наличии' : 'Отсутствует' }</div>
                { 
                    set 
                        ?   <div className="item__set">
                                <img src={ elipseActive } alt="elipse" />
                                <div className="item__set-active">Комплект</div>
                            </div>  
                        :   <div className="item__set">
                                <img src={ elipseDisable } alt="elipse" />
                                <div className="item__set-disable">Комплект</div>
                            </div>  
                }
            </div>
            <div className="item__order">
                <img src={ minus } alt="minus"/>
                <div className="item__counter">999</div>
                <img src={ plus } alt="plus" />
            </div>
        </div>
    )
}, equal)

function equal(prevProps, nextProps) {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

export default Item;