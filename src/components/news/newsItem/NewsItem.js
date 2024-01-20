import illustration from "../../../img/illustration.svg";

import './newsItem.scss';

const NewsItem = ({ id, discount, name }) => {
    return (
        <div key={ id } className='news-item'>
            <div className="news-item__body">
                <div className="news-item__text">
                    <div className="news-item__discount">{ discount }</div>
                    <h3 className="news-item__title">{ name }</h3>
                </div>
                <button className='news-item__btn' tabIndex={-1}>Подробнее</button>
            </div>
            <img src={ illustration } alt="illustration" className="news-item__img" />
        </div>
    )
}

export default NewsItem;