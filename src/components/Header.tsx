"use client"
import {BsMoonStars} from "react-icons/bs";
import {BiLogOut} from "react-icons/bi";
import Link from 'next/link';

export const Header = () => {
    return <section
        className="header fixed top-0 left-0 right-0 bg-white h-[4rem] header flex justify-center items-center text-xl px-5 py-3">
        <BsMoonStars className="flex-2"/>
        {/*<BsMoonStarsFill />*/}
        <p className="flex-1 text-center uppercase">
            <Link href="/" className="no-underline text-black">Today</Link>
        </p>
        <BiLogOut className="flex-2"/>
    </section>
}