import '../assets/css/Style.css'
import Banner from '../components/Home/Banner'
import BestSellingProduct from '../components/Home/BestSellingProduct'
import Cta from '../components/Home/Cta'
import Cta2 from '../components/Home/Cta2'
import Footer from '../components/Home/Footer'
import NavigationBar from '../components/Home/NavigationBar'
import NewPorduct from '../components/Home/NewProduct'
import News from '../components/Home/News'
import OfficialStore from '../components/Home/OfficialStore'


function Home() {
  return (
    <>
      <NavigationBar/>
      <Banner/>
      <Cta/>
      <NewPorduct/>
      <BestSellingProduct />
      <OfficialStore />
      <News/>
      <Cta2/>
      <Footer/>
    </>
  );
}

export default Home;
