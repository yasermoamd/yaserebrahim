import './nav.css';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Nav = () => {   
    return (
        <div className='sticky z-30 top-0 border-b mb-8'>
          {Head()}
         </div>
    )

    function Head() {
        return (
            <header className="bg-white w-full h-[90px]">
                   <div className='flex justify-around items-center gap-2'>
                    <div className='flex justify-center items-center mt-1'>
                         <img src="/yaser_logo.png" />
                    </div>
                     <div className='justify-center items-start gap-8 hidden sm:flex'>
                     <Link to={"blog"} className='text-xl font-extrabold cursor-pointer'>Blog</Link>
                     <div className='text-xl font-extrabold cursor-pointer'>Projects</div>
                     <div className='text-xl font-extrabold cursor-pointer'>About</div>
                     <div className='text-xl font-extrabold cursor-pointer'>Contact</div>
                     </div>
                     <div className=''>
                        <BsSearch className="w-5 h-5" />
                     </div>
                     <div>
                        <img src="" />
                     </div>
                     <div className=''>
                        <AiOutlineMenu className="w-5 h-5 flex sm:hidden md:hidden" />
                     </div>
                </div>
           </header>
        )
    }
}