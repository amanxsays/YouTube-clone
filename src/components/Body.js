import Sidebar from './Sidebar'
import { Outlet } from 'react-router'
import Header from './Header'

const Body = () => {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-[#fff]">
      <Header />
      <div className='relative flex pt-[10vh]'>
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Body