import './searchBar.scss';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder='Поиск'/>
            <div className="search-bar__count">42903</div>
        </div>
    )
}

export default SearchBar;