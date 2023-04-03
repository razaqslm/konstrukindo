import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './assets/css/Style.css'
import Home from './pages/Home';
import TentangKami from './pages/TentangKami';
import NotFound from './pages/NotFound';
import Produk from './pages/Produk';
import DetailProduk from './pages/DetailProduk';
import News from './pages/News';
import DetailNews from './pages/DetailNews';
import Kontak from './pages/Kontak';
import Karir from './pages/Karir';
import DetailKarir from './pages/DetailKarir';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tentang-kami' element={<TentangKami/>} />
        <Route path='/produk' element={<Produk/>} />
        <Route path='/detail-produk' element={<DetailProduk/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/detail-news' element={<DetailNews/>} />
        <Route path='/kontak' element={<Kontak/>} />
        <Route path='/karir' element={<Karir/>} />
        <Route path='/detail-karir' element={<DetailKarir/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
