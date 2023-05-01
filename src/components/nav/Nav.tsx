import { Link } from 'react-router-dom';
import './nav.css';
export const Nav = () => {
    return (
        <header className='flex justify-around items-center my-3'>
             <div>
                <img 
                    className='w-[45px]'
                    src="/yaser-logo.jpg" 
                    alt="Yaser Ebrahim" />
             </div>
             <ul className='flex gap-4'>
                <li className='text-[#C4C4C4]'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='text-[#C4C4C4]'>
                    <Link to='/skills'>Skills</Link>
                </li>
                <li className='text-[#C4C4C4]'>
                    <Link to='https://blog.yaserebrahim.com' target='_blank'>Blog</Link>
                </li>
                <li className='text-[#C4C4C4]'>
                    <Link to='/contact'>Contact</Link>
                </li>
             </ul>
            <div className='border-orange-500 border-2 w-[120px] h-[40px] rounded-xl text-white flex justify-center items-center cursor-pointer'>
                 <p>Hire Me</p>
             </div>
        </header>
    )
}