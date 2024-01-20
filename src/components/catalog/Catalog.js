import Section from '../section/Section';
import CatalogList from './catalogList/CatalogList';

import './catalog.scss';

const Catalog = () => {
    return (
        <section className='catalog'>
            <Section title={'Категории'}>
                <CatalogList />
            </Section>
        </section>
    )
}

export default Catalog;