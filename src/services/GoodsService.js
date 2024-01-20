
const useGoodsService = () => {
    const promoData = [
        {
            id: 1,
            name: 'Скидки',
            img: '/img/photo-1.webp'
        },
        {
            id: 2,
            name: 'Акции',
            img: '/img/photo-2.webp'
        },
        {
            id: 3,
            name: 'Распродажа',
            img: '/img/photo-3.webp'
        },
        {
            id: 4,
            name: 'Подарки',
            img: '/img/photo-4.webp'
        },
        {
            id: 5,
            name: 'Подарки',
            img: '/img/photo-5.webp'
        }
    ];

    const catalogItems = [
        {
            id: 1,
            name: 'Ванны',
            count: 3000,
            img: '/img/catalog/bath.webp'
        },
        {
            id: 2,
            name: 'Смесители',
            count: 3000,
            img: '/img/catalog/mixer.webp'
        },
        {
            id: 3,
            name: 'Вытяжки для кухни',
            count: 3000,
            img: '/img/catalog/kitchen-hood.webp'
        },
        {
            id: 4,
            name: 'Кухонные мойки',
            count: 3000,
            img: '/img/catalog/kitchen-sink.webp'
        },
        {
            id: 5,
            name: 'Другие',
            count: 3000,
            img: '/img/catalog/other.webp'
        },
        {
            id: 6,
            name: 'Унитазы',
            count: 3000,
            img: '/img/catalog/toilet.webp'
        },
        {
            id: 7,
            name: 'Вытяжки для кухни',
            count: 3000,
            img: '/img/catalog/kitchen-hood.webp'
        },
        {
            id: 8,
            name: 'Умывальники',
            count: 3000,
            img: '/img/catalog/washbasin.webp'
        },
        {
            id: 9,
            name: 'Полотенцесушители',
            count: 3000,
            img: '/img/catalog/heated-towel-rails.webp'
        },
        {
            id: 10,
            name: 'Водонагреватели',
            count: 3000,
            img: '/img/catalog/water-heater.webp'
        },
        {
            id: 11,
            name: 'Душевые',
            count: 3000,
            img: '/img/catalog/shower.webp'
        },
        {
            id: 12,
            name: 'Водонагреватели',
            count: 3000,
            img: '/img/catalog/convector.webp'
        },
        {
            id: 13,
            name: 'Водонагреватели',
            count: 3000,
            img: '/img/catalog/convector.webp'
        },
        {
            id: 14,
            name: 'Полотенцесушители',
            count: 3000,
            img: '/img/catalog/heated-towel-rails.webp'
        }
    ];

    const bestsItems = [
        {
            id: 1,
            name: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
            price: 1294,
            oldPrice: 1000,
            img: '/img/bests.webp',
            stock: true,
            set: true,
            favorite: false
        },
        {
            id: 2,
            name: 'Держатель для лейки BOOU PG605',
            price: 1294,
            oldPrice: 1000,
            img: '/img/bests.webp',
            stock: true,
            set: true,
            favorite: true
        },
        {
            id: 3,
            name: 'Держатель для лейки',
            price: 1294,
            oldPrice: 1000,
            img: '/img/bests.webp',
            stock: true,
            set: false,
            favorite: false
        },
        {
            id: 4,
            name: 'Держатель для лейки BOOU PG605',
            price: 1294,
            oldPrice: 1000,
            img: '/img/bests.webp',
            stock: true,
            set: true,
            favorite: false
        },
        {
            id: 5,
            name: 'Держатель для лейки BOOU PG605',
            price: 1294,
            oldPrice: 1000,
            img: '/img/bests.webp',
            stock: true,
            set: true,
            favorite: false
        },
        {
            id: 6,
            name: 'Держатель для лейки BOOU PG605',
            price: 1294,
            oldPrice: 1000,
            img: '/img/bests.webp',
            stock: true,
            set: true,
            favorite: false
        },
        {
            id: 7,
            name: 'Держатель для лейки BOOU PG605',
            price: 1294,
            oldPrice: 1000,
            img: '/img/bests.webp',
            stock: true,
            set: true,
            favorite: false
        },
        {
            id: 8,
            name: 'Держатель для лейки BOOU PG605',
            price: 1294,
            oldPrice: 1000,
            img: '/img/bests.webp',
            stock: true,
            set: true,
            favorite: false
        },
    ]

    const getPromoItems = () => {
        return promoData;
    }

    const getCatalogItem = () => {
        return catalogItems;
    }

    const getBests = () => {
        return bestsItems;
    }

    return { getPromoItems, getCatalogItem, getBests }
}

export default useGoodsService;