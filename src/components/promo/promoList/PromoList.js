import { useState, useEffect } from 'react';
import PromoItem from '../promoItem/PromoItem';

import useGoodsService from '../../../services/GoodsService';

import './promoList.scss';

const PromoList = () => {
    const [ promoItems, setPromoItems] = useState([]);
    const { getPromoItems } = useGoodsService();

    /*eslint-disable*/
    useEffect(() => {
        onRequest();
    }, []);
    /*eslint-disable*/

    const onRequest = () => {
        onPromoItemLoaded(getPromoItems());
    }

    const onPromoItemLoaded = (promoItems) => {
        setPromoItems(promoItems);
    }

    const addedItems = addItems(promoItems);
    const items = renderItems(addedItems);
    
    return (
        
            <div className="promo-list">
                { items }
            </div>
        
       
    )
}

function renderItems(promoItems) {
    return promoItems.map(item => {
        return (
            <PromoItem 
                key={ item.id } 
                name={ item.name } 
                img= { item.img }
            />
        )
    });
}

function addItems(items) {
    let index = items.length + 1;
    while (index < 15) {
        const item = {
            id: index++,
            name: '',
            img: ''
        };

        items.push(item);
    }
    
    return items;
}

export default PromoList;