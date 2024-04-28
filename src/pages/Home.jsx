
import { Outlet } from 'react-router-dom';
import { Header,  Footer } from './../components';
const Home = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Home