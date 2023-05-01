import { Nav } from "../../components/nav/Nav"
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <main>
            <Nav />
            <div className="flex justify-center items-center flex-col">
                <div className="mt-[5rem]">
                    <p className="text-[#fff]">Hi, I Am <span className="text-[#E8630A]">Yaser Ibrahim</span></p>
                </div>
                <div className="mb-2">
                    <p className="text-[#FFFFFF] font-bold font-mono text-[48px] shadow-lg">Full-stack JS&TS Developer</p>
                </div>
                <div>
                    <p className="text-white">I have a passion for expressive typography, perfectly color balanced photos, and ramen. </p>
                </div>

                {profileImage()}
                {socialLinks()}
            </div>
        </main>
    )

    function profileImage() {
        return (
            <div className="w-[160px] h-[160px] bg-[#E8630A] rounded-full flex justify-center items-center my-6">
                <img className="w-[150px] h-[150px] rounded-full" src="/yaser.jfif" alt="Yaser Ibrahim" />
            </div>
        )
    }

    function socialLinks() {
        return (
            <div className="flex justify-center items-center gap-8 text-white">
                <div>
                    <NavLink to='https://github.com/yasermoamd' target="_blank">
                        <AiOutlineGithub className="w-6 h-6 cursor-pointer" />
                    </NavLink>
                </div>
                <div>
                    <NavLink to='https://www.linkedin.com/in/yasermo7amd/' target="_blank">
                        <AiOutlineLinkedin className="w-6 h-6 cursor-pointer" />
                    </NavLink>
                </div>
            </div>
        )
    }
}