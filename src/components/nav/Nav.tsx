import './nav.css';
import { AiOutlineMenu, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return <div className="sticky z-30 top-0 border-b mb-8">{Head()}</div>;

  function Head() {
    return (
      <header className="bg-white w-full h-[90px]">
        <div className="flex justify-around items-center gap-2">
          <Link to="/" className="flex justify-center items-center mt-1">
            <img src="/yaser_logo.png" />
          </Link>
          <div className="justify-center items-start gap-8 lg:flex sm:hidden">
            <div className="text-xl font-extrabold cursor-pointer">Blog</div>
            <div className="text-xl font-extrabold cursor-pointer">
              Projects
            </div>
          </div>
          <div className="hidden lg:flex md:flex justify-center items-center gap-4">
            <Link
              to="https://github.com/yasermoamd/yaserebrahim"
              target="_blank"
            >
              <AiFillGithub className="w-7 h-7" />
            </Link>
            <Link to="https://www.linkedin.com/in/yasermo7amd/" target="_blank">
              <AiFillLinkedin className="w-7 h-7" />
            </Link>
          </div>
          <div className="">
            <AiOutlineMenu className="w-5 h-5 md:hidden lg:hidden sm:flex hidden" />
          </div>
        </div>
      </header>
    );
  }
};
