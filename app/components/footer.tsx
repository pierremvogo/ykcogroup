import Image from "next/image";
export default function Footer({ props }: any) {
    return (
        <footer className="bg-[#000000] dark:bg-gray-900 mt-lg">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-2 md:mb-0">
                        <a href="https://ykco.com/" className="flex items-center">
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
                    </div>
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