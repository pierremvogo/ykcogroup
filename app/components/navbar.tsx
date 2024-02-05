'use client';
import { useEffect, useState } from "react";
import Image from "next/image";


export default function NavBar({ props }: any) {

    const [showColor, setShowColor] = useState(false)
    const TOP_OFFSET = 50;
    /*useEffect(()=>{
        const handleScroll = () => {
            if(window.screenY >= TOP_OFFSET){
                setShowColor(true)
            }else{
                setShowColor(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])*/
    const toggleDropdown = () => {
        if (typeof document !== 'undefined') {
            let dropdownButton = document.querySelector("#dropdownButton #dropdown");
            dropdownButton?.classList.toggle("hidden");
        }
    }


    return (
        <nav className="bg-[#000000] border-gray-200 dark:bg-gray-900 fixed w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
                <a href="https://ykco.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src="/fullykco (2).png"
                        alt="Ykco Logo"
                        className="dark:invert"
                        width={85}
                        height={24}
                        priority
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                </a>
                <button className="relative inline-flex" id="dropdownButton">
                    <div className="border-solid border-grey-800 border-[1px] px-5 py-2 m-2 rounded cursor-pointer bg-white"
                        onClick={toggleDropdown}
                    >
                        <span className="sr-only">menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>

                    </div>
                    <div id="dropdown" className="rounded-bl rounded-tl shadow-md hidden border-gray-800 bg-[#00000] absolute min-[280px]:w-screen min-[768px]:w-[400px] top-[0px] right-[0px] md:w-[400px]">
                        <div className="grid grid-cols-4 gap-4 place-items-end rounded cursor-pointer border-blue-800 border-b-5">
                            {/*<div className="flex bg-[#000000] py-2 px-1">
                                <div className="flex mt-4 sm:justify-center sm:mt-0">

                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                        </svg>
                                        <span className="sr-only">Facebook page</span>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                            <path fill-rule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                        </svg>
                                        <span className="sr-only">Linkedin Page</span>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                            <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                                        </svg>
                                        <span className="sr-only">Twitter page</span>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 25 17">
                                            <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
                                        </svg>
                                        <span className="sr-only">Telegram account</span>
                                    </a>

                                </div>
    </div>*/}         
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="border-solid  border-grey-800 border-[1px] px-5 py-2 m-2 w-[60px] rounded cursor-pointer bg-white"
                                onClick={toggleDropdown}
                            >
                                <span className="sr-only">menu</span>
                                <svg id="Layer_1" className="w-5 h-5 bg-white" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                                </svg>

                            </div>
                        </div>
                        <div className="cursor-pointer  py-2 border-b-2 px-1 text-left text-white bg-[#000000] border-t-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-200">Acceuil</div>
                        <div className="cursor-pointer  py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] bg-[#000000] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">Services</div>
                        <div className="cursor-pointer  py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">A propos de nous</div>
                        <div className="cursor-pointer  py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">Abonnements</div>
                        <div className="cursor-pointer  py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">Livres</div>
                        <div className="cursor-pointer  py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">Blog</div>
                        <div className="cursor-pointer  py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">S'inscrire</div>
                        <div className="cursor-pointer  py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">Se connecter</div>


                    </div>
                </button>

            </div>
        </nav>
    )
}
