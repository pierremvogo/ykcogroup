// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
"use client";
import Image from "next/image";
import { useEffect } from "react";
import "../globals.css";
import $ from 'jquery';

const Tooltip = ({props, title}:any) => {
    useEffect(() => {
        const init = async () => {
            const { Tooltip, initTE } = await import("tw-elements");
            initTE({ Tooltip });
        }
        init();
           
    }, []);

    return (
        <a
          href="#"
          className="rounded w-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
          data-te-toggle="tooltip"
          title={title}
          >{props}</a>
   
    );
};

export default Tooltip;

