import { Nav } from "../../components/nav/Nav"
import {BsBrowserFirefox, BsWindowDesktop, BsFillBootstrapFill} from "react-icons/bs";
import { DiReact, SiNextdotjs, TbBrandSolidjs, SiReactquery, SiTailwindcss, SiSass, SiMui, SiTypescript, SiJavascript, SiHtml5 } from 'react-icons/all'
import { IoLogoCss3 } from 'react-icons/io';
import {HiServer} from "react-icons/hi";
import { FaLaptopCode } from 'react-icons/fa';
function Skills() {
  return (
    <main>
        <Nav />

        <div className="flex justify-center items-center mt-[4rem]">
            <div className="bg-white w-[54rem] h-[26rem] shadow-2xl rounded-xl p-3 flex flex-col">
                <div className="flex">
                    <div className="flex justify-center items-center gap-2 ml-4 cursor-pointer" onClick={() => null}>
                        <div><BsBrowserFirefox className="w-6 h-6" /></div>
                        <div><span className="text-md font-bold">FrontEnd Development</span></div>
                    </div>
                    <div className="flex justify-center items-center gap-2 ml-4 cursor-pointer" onClick={() => null}>
                        <div><HiServer className="w-5 h-5" /></div>
                        <div><span className="text-md font-bold">BackEnd Development</span></div>
                    </div>
                    <div className="flex justify-center items-center gap-2 ml-4 cursor-pointer" onClick={() => null}>
                        <div><BsWindowDesktop className="w-5 h-5" /></div>
                        <div><span className="text-md font-bold">Desktop Development</span></div>
                    </div>
                    <div className="flex justify-center items-center gap-2 ml-4 cursor-pointer" onClick={() => null}>
                        <div><FaLaptopCode className="w-5 h-5" /></div>
                        <div><span className="text-md font-bold">Others Skills</span></div>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="p-3 flex gap-4 justify-around items-center">
                        <div className="flex flex-col justify-center items-center">
                            <DiReact className="w-14 h-14" />
                            <span>React</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <SiNextdotjs className="w-14 h-14" />
                            <span>NextJs</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <TbBrandSolidjs className="w-14 h-14" />
                            <span>SolidJs</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <SiReactquery className="w-14 h-14" />
                            <span>React-Query</span>
                        </div>
                    </div>
                    <div className="p-3 flex  justify-around items-center">
                        <div className="flex flex-col justify-center items-center">
                            <IoLogoCss3 className="w-14 h-14" />
                            <span>CSS</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <SiMui className="w-14 h-14" />
                            <span>Mui</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <SiTailwindcss className="w-14 h-14" />
                            <span>Tailwindcss</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <BsFillBootstrapFill className="w-14 h-14" />
                            <span>Bootstrap</span>
                        </div>
                    </div>
                    <div className="p-3 flex gap-[6rem] justify-around items-center">
                        <div className="flex flex-col justify-center items-center">
                            <SiTypescript className="w-12 h-12" />
                            <span>Typescript</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <SiJavascript className="w-14 h-14" />
                            <span>Javascript</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <SiSass className="w-14 h-14" />
                            <span>Sass</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <SiHtml5 className="w-14 h-14" />
                            <span>Html5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Skills
