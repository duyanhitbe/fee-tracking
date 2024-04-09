import {LuHistory, LuPieChart} from "react-icons/lu";
import {HiPlusSmall} from "react-icons/hi2";
import Link from 'next/link';

export const Footer = () => {
    return <footer
        className="fixed bg-white bottom-0 left-0 right-0 h-[6rem] w-[100%] border-solid border-t border-l-0 border-r-0 border-b-0 border-t-gray-200">
        <div className="h-full px-5 flex justify-evenly items-center">
            <Link href="/analytic" className="no-underline flex flex-col justify-center items-center">
                <LuPieChart className="text-2xl text-gray-400"/>
                <span className="text-sm text-gray-400">Analytic</span>
            </Link>
            <div className="flex justify-center items-center mx-5 rounded-full h-16 w-16 bg-amber-200">
                <HiPlusSmall className="text-4xl text-gray-800"/>
            </div>
            <Link href="/history" className="no-underline flex flex-col justify-center items-center">
                <LuHistory className="text-2xl text-gray-400"/>
                <span className="text-sm text-gray-400">History</span>
            </Link>
        </div>

    </footer>
}