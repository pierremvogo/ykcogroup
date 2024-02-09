'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import "../globals.css";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguangeChanger";


export default function NavBar({ props }: any) {
    const { t } = useTranslation();
    const toggleDropdown = () => {
        if (typeof document !== 'undefined') {
            let dropdownButton = document.querySelector("#dropdownButton #dropdown");
            dropdownButton?.classList.toggle("hidden");
        }
    }


    return (
        <nav className="bg-[#000000] z-[9999] fixed border-gray-200 dark:bg-gray-900 t-0 w-full">
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
                <div className="">
                    <LanguageChanger />
                </div>
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
                        <div className="cursor-pointer navitem  py-2 border-b-2 px-1 text-left text-white bg-[#000000] border-t-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-200">{t('menu:key1')}</div>
                        <div className="cursor-pointer navitem py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] bg-[#000000] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">{t('menu:key2')}</div>
                        <div className="cursor-pointer navitem py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">{t('menu:key3')}</div>
                        <div className="cursor-pointer navitem py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">{t('menu:key4')}</div>
                        <div className="cursor-pointer navitem py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">{t('menu:key5')}</div>
                        <div className="cursor-pointer navitem py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">{t('menu:key6')}</div>
                        <div className="cursor-pointer navitem py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">{t('menu:key7')}</div>
                        <div className="cursor-pointer navitem py-2 px-1 text-left text-white bg-[#000000] border-b-2 border-[#ffffff] transition ease-in-out delay-10 hover:-translate-x-1 duration-800">{t('menu:key8')}</div>


                    </div>
                </button>

            </div>
        </nav>
    )
}
