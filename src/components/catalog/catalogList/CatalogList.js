import { useState, useEffect } from 'react';
import useGoodsService from '../../../services/GoodsService';
import CatalogItem from '../catalogItem/CatalogItem';

import './catalogList.scss';

const CatalogList = () => {
    const [ catalogItems, setCatalogItems ] = useState([]);
    const { getCatalogItem } = useGoodsService();

    /* eslint-disable */
    useEffect(() => {
        onRequest();
    }, []);
    /* eslint-disable */

    const onRequest = () => {
        onCatalogItemsLoaded(getCatalogItem());
    }

    const onCatalogItemsLoaded = (catalogItems) => {
        setCatalogItems(catalogItems);
    }

    const items = renderItems(catalogItems);

    return (
        <div className='catalog-list'>
            { items }
        </div>
    )
}

function renderItems(promoItems) {
    return promoItems.map(item => {
        return (
            <CatalogItem 
                key={ item.id } 
                name={ item.name } 
                img={ item.img }
                count={ item.count }
            />
        )
    });
}

export default CatalogList;