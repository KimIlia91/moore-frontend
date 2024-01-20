import Section from "../section/Section";
import NewsItem from "./newsItem/NewsItem";
import SlickSlider from "../slickSlider/SlickSlider";

import './news.scss';

const News = () => {
    return (
        <section className="news">
            <Section
                title={ 'Новости' } 
                linkName={'все'} 
                link={ '/news' }
            >
                <SlickSlider slidesToShow={ 3 }>
                    <NewsItem 
                        key={ 1 }
                        name={ 'На кухонную мебель' }
                        discount={ '-50%' }
                    />
                    <NewsItem 
                        key={ 2 }
                        name={ 'На конверторы' }
                        discount={ '-40%' }
                    />
                    <NewsItem 
                        key={ 3 }
                        name={ 'На кухонные раковины' }
                        discount={ '-55%' }
                    />
                    <NewsItem 
                        key={ 4 }
                        name={ 'На унитазы' }
                        discount={ '-70%' }
                    />
                </SlickSlider>
            </Section>
        </section>
    )
}

export default News;