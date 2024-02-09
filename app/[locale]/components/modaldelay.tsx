"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../globals.css";

export default function ModalDelay() {
 const [showModal, setShowModal] = useState(false);
    useEffect( function() {
        setTimeout(function(){
            setShowModal(true);
        },5000)

      }, [])

    return (
        <div id="overlay" className={`${showModal? 'block': 'hidden'}`}>
            <div id="popup">
                

                <div className={`p-2 container md:w-full xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row`}>
                
                    <button
                        id="close"
                        type="button"
                        onClick={() => { document.getElementById('overlay')!.style.display = "none" }}
                        className="min-[280px]:m-5 rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
               
                    <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                        <img src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Envelope with a newsletter" role="img" className="h-full xl:w-full lg:w-1/2 w-full" />
                    </div>
                    <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28">
                        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Souscrire</h1>
                        <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Souscrivez à notre newsletter pour être informer à tout moment de nos nouveaux services et articles </p>
                        <div className="flex items-stretch mt-12">
                            <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Votre Email" />
                            <button className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">souscrire</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}