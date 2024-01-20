import { useState, useEffect, } from 'react';

import SlickSlider from '../slickSlider/SlickSlider';
import useGoodsService from '../../services/GoodsService';
import Section from "../section/Section";
import Item from "../item/Item";

import './best.scss';

const Best = () => {
    const [ bestItems, setBestItems ] = useState([]);
    const { getBests } = useGoodsService();

    /* eslint-disable */
    useEffect(() => {
        onRequest();
    }, []);
    /* eslint-disable */

    const onRequest = () => {
        onBestItemsLoaded(getBests());
    }

    const onBestItemsLoaded = (bestItems) => {
        setBestItems(bestItems);
    }

    const onChangeFavorite = (id, favorite) => {
        setBestItems(items =>
            items.map(item =>
                item.id === id ? { ...item, favorite: !favorite } : item
            )
        );
    }

    const items = bestItemsView(bestItems, onChangeFavorite);
    return (
        <section className='best'>
            <Section 
                title={ 'Хиты продаж' } 
                linkName={ 'Перейти в каталог' } 
                link={ '/bests' }
            >
               <SlickSlider slidesToShow={ 6 }>
                    { items }
               </SlickSlider>
            </Section>
        </section>
        
    )
}

function bestItemsView(promoItems, onChangeFavorite) {
    return promoItems.map(item => {
        return (
            <Item
                key={ item.id } 
                id={ item.id } 
                name={ item.name } 
                img={ item.img }
                price={ item.price }
                stock={ item.stock }
                set={ item.set }
                favorite={ item.favorite }
                onChangeFavorite={ onChangeFavorite }
            />
        )
    });
}

export default Best;