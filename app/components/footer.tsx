import Image from "next/image";
export default function Footer({ props }: any) {
    return (
        <footer className="bg-[#000000] dark:bg-gray-900 mt-lg">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Entreprise</h2>
                            <ul className="text-gray-500 text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="https://flowbite.com/" className="hover:underline">A propos de nous</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Prix</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Carrière</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Téléchargement</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Nouveauté</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Ce que pensent nos clients</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Communauté</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Ressources</h2>
                            <ul className="text-gray-500 text-gray-400 font-medium ">
                                <li className="mb-2">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Blog</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Webinar</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Tutoriels vidéo</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Ebook</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Cours en ligne</a>
                                </li>
                            </ul>
                        </div>
                        <div className="min-[280px]:w-screen md:w-full">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Support</h2>
                            <ul className="text-gray-500 text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Centre d&apos;aide</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="">Tel: {"(+237) 651 11 98 80"}</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="w-full md:text-sm min-[280px]:text-sm">Email:ykco-group@protonmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <div className="flex mt-4 sm:justify-center sm:mt-0">

                                <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white ms-5">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                    <span className="sr-only">Linkedin Page</span>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white ms-5">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Twitter page</span>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white ms-5">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 25 17">
                                        <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
                                    </svg>
                                    <span className="sr-only">Telegram account</span>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
                <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">ykco™</a>. All Rights Reserved.
                    </span>

                </div>
            </div>
        </footer>
    )
}