
import { Outlet } from 'react-router-dom';
import { Header,  Footer } from './../components';
const Home = () => {
  return (
    <div className='relative'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Home