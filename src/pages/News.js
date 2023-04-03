import Footer from "../components/Home/Footer"
import NavigationBar from "../components/Home/NavigationBar"
import BreakingNews from "../components/News/BreakingNews"
import LatesNews from "../components/News/LatesNews"

const News = () => {
    return(
        <>
        <NavigationBar/>
        <BreakingNews/>
        <LatesNews/>
        <Footer/>
        </>
    )
}

export default News