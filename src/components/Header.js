import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const Header = ({count, setCount}) => {
  return (
    <main className='p-2 grid grid-cols-3 gap-3 border-b items-center'>
      <div className='flex'>
        <img className='h-8 mr-2' src={Logo} alt="" />
        <span className='text-xl justify-self-center'>SoundMate</span>        
      </div>
      <div className='flex flex-wrap text-lg justify-center'>
        <Link to='/' className='hover:bg-gray-200 hover:rounded-lg p-2' href="/">Home</Link>
        <Link to='cart' className='hover:bg-gray-200 hover:rounded-lg p-2' href="/">Cart</Link>
      </div>
      <div className='text-center'>
        <Link to='cart'><span className='bg-gray-100 rounded-full p-2'>{count}</span></Link>
      </div>
    </main>
  )
}
