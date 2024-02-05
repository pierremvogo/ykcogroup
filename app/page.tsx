'use client'
import Image from "next/image";
import Movies from "./movies/movies";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [showColor, setShowColor] = useState(false)
  const TOP_OFFSET = 5;
  useEffect(() => {
    const handleScroll = () => {
      console.log(`Window screen : ${window.screenY}`);
      if (window.screenY >= TOP_OFFSET) {
        setShowColor(true);
      } else {
        setShowColor(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  return (
    <main>
      <NavBar />
      <div className="flex min-h-screen flex-col items-center mb-5">
        <div className="grid grid-cols-2 gap-4 place-content-center my-7 bg-gradient-to-r from-sky-500 to-indigo-500">

        </div>

        <div className="min-h-screen main-bg-image w-full bg-no-repeat bg-cover items-center justify-center">
          <div className="grid grid-rows-2 gap-4 place-content-center w-full h-full my-10">
            <h1 className="md:text-[#000000] text-center font-sans text-[2.625rem] md:max-w-[24rem] tracking-[-.01em] leading-[110%] min-[280px]:text-white">YKCO Group</h1>
            <h1 className="md:text-[#000000] font-sans md:text-[2.625rem] md:max-w-[24rem] leading-[110%] tracking-[-.01em] min-[280px]:text-white min-[280px]:text-[2.0rem] min-[280px]:leading-[110%] min-[280px]:text-center min-[280px]:font-sans">Inspiring&nbsp;Excellence</h1>

          </div>
        </div>
        <div className="w-full h-20 bg-gradient-to-r from-violet-600 to-violet-200 py-5 px-2">
          <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button" disabled>
            Pourquoi nous choisir?
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-5 md:h-60 min-[280px]:grid-cols-1 min-[280px]:h-full bg-[#000000] w-full">
          <div className="text-[#ffffff] grid grid-rows-2 m-5">
            <h1 className="font-sans mb-0 pb-0 text-[1.625rem] md:max-w-[24rem] tracking-[-.01em] leading-[110%]">Des&nbsp;contenus novateurs</h1>
            <h2 className="font-sans underline cursor-pointer">En&nbsp;savoir&nbsp;plus sur nos contenus</h2>
          </div>
          <div className="text-[#ffffff] grid grid-rows-2 m-5 md:place-content-end">
            <h1 className="font-sans mb-0 pb-0 text-[1.625rem] md:max-w-[24rem] tracking-[-.01em] leading-[110%]">Outil&nbsp;conçu&nbsp;par les experts</h1>
            <h2 className="font-sans underline cursor-pointer">Explorez&nbsp;meilleures&nbsp;offres</h2>
          </div>
          <div className="text-[#ffffff] grid grid-rows-2 m-5">
            <h1 className="font-sans mb-0 pb-0 text-[1.625rem] md:max-w-[24rem] tracking-[-.01em] leading-[110%]">Client&nbsp;toujours satisfait</h1>
            <h2 className="font-sans underline cursor-pointer">Avis&nbsp;de&nbsp;nos&nbsp;clients</h2>
          </div>
          <div className="text-white"></div>
        </div>
        <div className="min-h-screen second-bg-image w-full bg-no-repeat bg-cover items-center justify-center">

        </div>
        <div className="grid md:grid-cols-2 gap-5 md:h-75 min-[280px]:grid-cols-1 min-[280px]:h-full bg-[#000000] w-full">
          <div className="col-span-2">
            <hr className="my-6 border-white sm:mx-auto lg:my-8" />
            <h1 className="font-sans text-[#ffffff] mb-0 pb-0 text-[1.625rem] md:max-w-[24rem] tracking-[-.01em] leading-[0%]">Nos&nbsp;services</h1>
          </div>

          <div className="text-[#000000] grid grid-cols-1 m-8 place-items-center h-[50%]">

            <button className="h-full px-6 items-center justify-center bg-gradient-to-t from-grey-700 to-grey-200 w-[50%] text-sm hover:bg-[#9E70F3] hover:border-grey-800 font-semibold rounded-md bg-white text-[#000000]" type="submit">
              <div className="grid grid-cols-3">
                <div className="items-center justify-center">
                  <Image
                    src="/supadm1.png"
                    alt="ecom"
                    className="dark:invert"
                    width={96}
                    height={20}
                    priority
                  />
                </div>
                <div className="text-sm w-full col-span-2 leading-[350%]">Consulting</div>
              </div>

            </button>
          </div>
          <div className="text-[#000000] grid grid-cols-1 m-8 place-items-center">
            <button className="h-full px-6 items-center justify-center bg-gradient-to-t from-grey-700 to-grey-200 w-[50%] text-sm hover:bg-[#9E70F3] hover:border-grey-800 font-semibold rounded-md bg-white text-[#000000]" type="submit">
              <div className="grid grid-cols-3">
                <div className="items-center justify-center">
                  <Image
                    src="/d5.png"
                    alt="ecom"
                    className="dark:invert"
                    width={96}
                    height={20}
                    priority
                  />
                </div>
                <div className="text-sm w-full col-span-2 leading-[180%]">E-commerce<br />
                  Import &nbsp;/&nbsp;Export</div>
              </div>

            </button>
          </div>
          <div className="text-[#000000] grid grid-cols-1 m-8 place-items-center">
            <button className="h-full px-6 items-center justify-center bg-gradient-to-t from-grey-700 to-grey-200 w-[50%] text-sm hover:bg-[#9E70F3] hover:border-grey-800 font-semibold rounded-md bg-white text-[#000000]" type="submit">
              <div className="grid grid-cols-3">
                <div className="items-center justify-center">
                  <Image
                    src="/adm3.png"
                    alt="ecom"
                    className="dark:invert"
                    width={96}
                    height={20}
                    priority
                  />
                </div>
                <div className="text-sm w-full col-span-2 leading-[350%]">Formation</div>
              </div>

            </button>
          </div>
          <div className="text-[#000000] grid grid-cols-1 m-8 md:place-items-center">
            <button className="h-full px-6 items-center justify-center bg-gradient-to-t from-grey-700 to-grey-200 w-[50%] text-sm hover:bg-[#9E70F3] hover:border-grey-800 font-semibold rounded-md bg-white text-[#000000]" type="submit">
              <div className="grid grid-cols-3">
                <div className="items-center justify-center">
                  <Image
                    src="/chat2.png"
                    alt="ecom"
                    className="dark:invert"
                    width={96}
                    height={20}
                    priority
                  />
                </div>
                <div className="text-sm w-full col-span-2 leading-[350%]">Média</div>
              </div>

            </button>
          </div>
          <div className="text-white"></div>
        </div>


      </div>
      <Footer />
    </main>
  );













  {/*  
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute  before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20  after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[15ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>

      <div className="flex font-sans">
        <div className="flex-none w-48 relative">
          <img src="/campaign (3).jpg" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              Utility Jacket
            </h1>
            <div className="text-lg font-semibold text-slate-500">
              $110.00
            </div>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              In stock
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              <label>
                <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="s" />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="m" />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="l" />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="xl" />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                Buy now
              </button>
              <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                Add to bag
              </button>
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-500 border border-slate-200" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>







      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Beach House in Collingwood</h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Entire house</p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img src="/campaign (1).jpg" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
          <img src="/campaign (2).jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
          <img src="/campaign (3).jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
        </div>
        <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt className="sr-only">Reviews</dt>
          <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
            <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
              <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center">
            <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            Collingwood, Ontario
          </dd>
        </dl>
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Check availability</button>
        </div>
        <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.
        </p>
      </div>

      <Movies movies={[{
        id: 1,
        image: "/campaign (6).jpg",
        starRating: 20,
        rating: "Gladiators",
        year: "2019",
        genre: "Action",
        runtime: "2h",
        cast: "12"

      },{
        id: 1,
        image: "/campaign (10).jpg",
        starRating: 15,
        rating: "JetLI 1",
        year: "2009",
        genre: "Comédie",
        runtime: "2h",
        cast: "14"

      },{
        id: 1,
        image: "/campaign (13).jpg",
        starRating: 2,
        rating: "Underground",
        year: "2023",
        genre: "Science",
        runtime: "3h",
        cast: "10"

      }]} />

    </main>*/}


}
