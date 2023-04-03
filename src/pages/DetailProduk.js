import ProdukTerkait from "../components/DetailProduk/ProdukTerkait"
import SubDetailProduk from "../components/DetailProduk/SubDetailProduk"
import Cta2 from "../components/Home/Cta2"
import Footer from "../components/Home/Footer"
import NavigationBar from "../components/Home/NavigationBar"

const DetailProduk = () => {
    return(
        <>
            <NavigationBar/>
            <SubDetailProduk/>
            <ProdukTerkait/>
            <Cta2/>
            <Footer/>
        </>
    )
}

export default DetailProduk