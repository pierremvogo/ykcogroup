import { useEffect } from 'react';
import Translator from '../../../i18n';


export default function TestTranslation() {
    useEffect(() => {
        const init = async () => {
            const {Carousel, Dropdown, Input, Collapse, initTE } = await import("tw-elements");
            initTE({Carousel, Dropdown, Input, Collapse });
            new Translator();
        }
        init();
           
    }, []);
    return (

        <div className="flex flex-col min-h-screen w-full">
            <div id="app">

                <nav
                    className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
                    data-te-navbar-ref
                >
                    <div className="flex w-full flex-wrap items-center justify-between px-3">

                        <button
                            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                            type="button"
                            data-te-collapse-init
                            data-te-target="#navbarSupportedContent1"
                            aria-controls="navbarSupportedContent1"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >

                            <span className="[&>svg]:w-7">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-7 w-7"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </button>


                        <div
                            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                            id="navbarSupportedContent1"
                            data-te-collapse-item
                        >
                            <div className="ml-5 flex w-[250px] items-center justify-between">
                                <div className="relative" data-te-input-wrapper-init>
                                    <input
                                        type="search"
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleSearch2"
                                        placeholder="Type query"
                                    />
                                    <label
                                        htmlFor="exampleSearch2"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        data-i18n="search"
                                    ></label>
                                </div>

                                <span
                                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                    id="basic-addon2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>


                        <div className="relative flex items-center">

                            <div className="relative" data-te-dropdown-ref>

                                <a
                                    className="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="#"
                                    id="dropdownMenuButton1"
                                    role="button"
                                    data-te-dropdown-toggle-ref
                                    aria-expanded="false"
                                >

                                    <span className="[&>svg]:w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>

                                    <span
                                        className="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white"
                                    >1</span>
                                </a>

                                <ul
                                    className="absolute left-auto right-0 w-[160px] z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButton1"
                                    data-te-dropdown-menu-ref
                                >

                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                            href="#"
                                            data-te-dropdown-item-ref
                                            data-i18n="news1"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                            href="#"
                                            data-te-dropdown-item-ref
                                            data-i18n="news2"
                                        ></a>
                                    </li>
                                </ul>
                            </div>


                            <div className="relative mx-2" data-te-dropdown-ref>
                                <a
                                    className="mr-4 flex items-center text-gray-500 transition duration-200 hover:text-gray-700 hover:ease-in-out focus:text-gray-700 motion-reduce:transition-none"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-te-dropdown-toggle-ref
                                    aria-expanded="false"
                                >
                                    <span
                                        className="relative inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit"
                                    >
                                        <span
                                            id="selected-lang-flag"
                                            className="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"
                                        ></span>
                                    </span>
                                    <span className="w-2 pl-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </a>
                                <ul
                                    className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="navbarDropdown"
                                    data-te-dropdown-menu-ref
                                >
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                            href="#"
                                            data-te-dropdown-item-ref
                                            data-i18n-switcher
                                            data-i18n-lang="en"
                                        >
                                            <span
                                                className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit"
                                            >
                                                <span
                                                    className="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"
                                                ></span>
                                            </span>
                                            <span className="mr-4">English</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                            href="#"
                                            data-te-dropdown-item-ref
                                            data-i18n-switcher
                                            data-i18n-lang="pl"
                                        >
                                            <span
                                                className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit"
                                            >
                                                <span
                                                    className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-572px_!important]"
                                                ></span>
                                            </span>
                                            Polski</a>
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                            href="#"
                                            data-te-dropdown-item-ref
                                            data-i18n-switcher
                                            data-i18n-lang="ja"
                                        >
                                            <span
                                                className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit"
                                            >
                                                <span
                                                    className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-36px_-910px_!important]"
                                                ></span>
                                            </span>
                                            日本語</a>
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                                            href="#"
                                            data-te-dropdown-item-ref
                                            data-i18n-switcher
                                            data-i18n-lang="de"
                                        >
                                            <span
                                                className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit"
                                            >
                                                <span
                                                    className="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:0px_-1430px_!important]"
                                                ></span>
                                            </span>
                                            Deutsch</a>
                                    </li>
                                </ul>
                            </div>


                            <div className="relative" data-te-dropdown-ref>

                                <a
                                    className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                                    href="#"
                                    id="dropdownMenuButton2"
                                    role="button"
                                    data-te-dropdown-toggle-ref
                                    aria-expanded="false"
                                >

                                    <img
                                        src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                                        className="rounded-full"
                                        style={{ height: "25px", width: "25px" }}
                                        alt=""
                                        loading="lazy"
                                    />
                                </a>

                                <ul
                                    className="absolute left-auto right-0 w-[160px] z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButton2"
                                    data-te-dropdown-menu-ref
                                >

                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                            href="#"
                                            data-te-dropdown-item-ref
                                            data-i18n="profile"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                            href="#"
                                            data-te-dropdown-item-ref
                                            data-i18n="profileSettings"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 w py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                            href="#"
                                            data-te-dropdown-item-ref
                                            data-i18n="profileLogout"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container mx-auto px-[0.75rem]">
                    <div className="flex mx-auto md:pt-12 md:px-16 lg:w-[50%]">
                        <div
                            id="carouselExampleCaptions"
                            className="relative"
                            data-te-carousel-init
                            data-te-carousel-slide
                        >

                            <div
                                className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                                data-te-carousel-indicators
                            >
                                <button
                                    type="button"
                                    data-te-target="#carouselExampleCaptions"
                                    data-te-slide-to="0"
                                    data-te-carousel-active
                                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-te-target="#carouselExampleCaptions"
                                    data-te-slide-to="1"
                                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-te-target="#carouselExampleCaptions"
                                    data-te-slide-to="2"
                                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                    aria-label="Slide 3"
                                ></button>
                            </div>


                            <div
                                className="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
                            >

                                <div
                                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                    data-te-carousel-active
                                    data-te-carousel-item
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                                        className="block w-full"
                                        alt="..."
                                    />
                                    <div
                                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
                                    >
                                        <h5 className="text-xl" data-i18n="slide1Label"></h5>
                                        <p data-i18n="slide1Description"></p>
                                    </div>
                                </div>

                                <div
                                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                    data-te-carousel-item
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                                        className="block w-full"
                                        alt="..."
                                    />
                                    <div
                                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
                                    >
                                        <h5 className="text-xl" data-i18n="slide2Label"></h5>
                                        <p data-i18n="slide2Description"></p>
                                    </div>
                                </div>

                                <div
                                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                    data-te-carousel-item
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                                        className="block w-full"
                                        alt="..."
                                    />
                                    <div
                                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
                                    >
                                        <h5 className="text-xl" data-i18n="slide2Label"></h5>
                                        <p data-i18n="slide2Description"></p>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                                type="button"
                                data-te-target="#carouselExampleCaptions"
                                data-te-slide="prev"
                            >
                                <span className="inline-block h-8 w-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.75 19.5L8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                </span>
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                ></span>
                            </button>

                            <button
                                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                                type="button"
                                data-te-target="#carouselExampleCaptions"
                                data-te-slide="next"
                            >
                                <span className="inline-block h-8 w-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </span>
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                ></span>
                            </button>
                        </div>
                    </div>
                    <div
                        className="flex flex-col md:flex-row mt-5 md:pt-9 md:px-10 space-y-7 md:space-x-6 md:space-y-0"
                    >
                        <div className="mx-auto lg:w-[50%]">
                            <div
                                className="relative overflow-hidden max-w-none lg:max-w-2xl bg-cover bg-[50%] bg-no-repeat"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp"
                                    className="w-full"
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                                    style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6" }}
                                >
                                    <div className="flex h-full items-center justify-center">
                                        <p className="text-white opacity-100" data-i18n="maskText"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto lg:w-[50%] pb-6 md:pb-0">
                            <div id="accordionExample">
                                <div
                                    className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
                                >
                                    <h2 className="mb-0" id="headingOne">
                                        <button
                                            className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                            type="button"
                                            data-te-collapse-init
                                            data-te-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            <span data-i18n="accordion1"></span>
                                            <span
                                                className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="!visible"
                                        data-te-collapse-item
                                        data-te-collapse-show
                                        aria-labelledby="headingOne"
                                        data-te-parent="#accordionExample"
                                    >
                                        <div className="px-5 py-4" data-i18n="accordionTxt"></div>
                                    </div>
                                </div>
                                <div
                                    className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
                                >
                                    <h2 className="mb-0" id="headingTwo">
                                        <button
                                            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                            type="button"
                                            data-te-collapse-init
                                            data-te-collapse-collapsed
                                            data-te-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            <span data-i18n="accordion2"></span>
                                            <span
                                                className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="!visible hidden"
                                        data-te-collapse-item
                                        aria-labelledby="headingTwo"
                                        data-te-parent="#accordionExample"
                                    >
                                        <div className="px-5 py-4" data-i18n="accordionTxt"></div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
                                >
                                    <h2 className="accordion-header mb-0" id="headingThree">
                                        <button
                                            className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                                            type="button"
                                            data-te-collapse-init
                                            data-te-collapse-collapsed
                                            data-te-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            <span data-i18n="accordion3"></span>
                                            <span
                                                className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="!visible hidden"
                                        data-te-collapse-item
                                        aria-labelledby="headingThree"
                                        data-te-parent="#accordionExample"
                                    >
                                        <div className="px-5 py-4" data-i18n="accordionTxt"></div>
                                    </div>
                                </div>
                            </div>
                            <button
                                id="popconfirm"
                                type="button"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                className="inline-block rounded bg-primary mb-4 mt-4 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            >
                                Popconfirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer
                className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left mt-auto"
            >
                <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
                    © 2023 Copyright:
                    <a
                        className="text-neutral-800 dark:text-neutral-400"
                        href="https://tw-elements.com/"
                    >TW elements</a>
                </div>
            </footer>
            <script type="module" src="/main.js"></script>
        </div>
    )
}