
import { Outlet } from 'react-router-dom';
import { Header,  Footer } from './../components';
const Home = () => {
  return (
    <div className='relative w-full box-border overflow-x-hidden'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Home