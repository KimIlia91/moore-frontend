import { Link } from 'react-router-dom';

import './section.scss';

const Section = ({ children, title, link, linkName }) => {
    return (
        <>
            <div className="section__wrapper">
                <h2 className="section__title">{ title }</h2>
                <Link to={ link } className="section__link">{ linkName }</Link>
            </div>
            { children }
        </>
    )
}

export default Section;