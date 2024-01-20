import { useState, useEffect, } from 'react';

import useGoodsService from '../../services/GoodsService';
import SlickSlider from '../slickSlider/SlickSlider';
import Section from '../section/Section';
import Item from '../item/Item';

import './auction.scss';

const Auction = () => {
    const [ bestItems, setBestItems ] = useState([]);
    const { getBests } = useGoodsService();

    /*eslint-disable*/
    useEffect(() => {
        onRequest();
    }, []);
    /*eslint-disable*/

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

    const items = auctionItemsView(bestItems, onChangeFavorite);
    return (
        <section className='auction'>
            <Section 
                title={ 'Аукционные товары' } 
                linkName={'перейти в каталог'} 
                link={ '/auction' }
            >
                <SlickSlider slidesToShow={ 6 }>
                    { items }
                </SlickSlider>
            </Section>
        </section>
    )
}

function auctionItemsView(promoItems, onChangeFavorite) {
    return promoItems.map(item => {
        return (
            <Item 
                key={ item.id } 
                id={ item.id } 
                name={ item.name } 
                img={ item.img }
                price={ item.price }
                oldPrice={ item.oldPrice }
                stock={ item.stock }
                set={ item.set }
                favorite={ item.favorite }
                onChangeFavorite={ onChangeFavorite }
            />
        )
    });
}
export default Auction;