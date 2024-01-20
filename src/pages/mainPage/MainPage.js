import Header from '../../components/header/Header';
import Promo from '../../components/promo/Promo';
import Catalog from '../../components/catalog/Catalog';
import Best from '../../components/best/Best';
import Divider from '../../components/divider/Divider';
import News from '../../components/news/News';
import Auction from '../../components/auction/Auction';
import Addresses from '../../components/addresses/Addresses';
import Footer from '../../components/footer/Footer';

const MainPage = () => {
    return (
        <>
            <Header/>
            <div className="app-container">
                <Promo />
                <Catalog/>
                <Best />
                <Divider />
                <News />
                <Divider />
                <Auction   />
                <Divider />
                <Addresses />
                <Divider />
            </div>
            <Footer />
        </>
    )
}

export default MainPage; 