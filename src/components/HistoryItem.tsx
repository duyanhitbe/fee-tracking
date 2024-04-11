import {getCurrencyText, toLongDate} from "@app/helpers/format.helper";
import {BsArrowDownRight, BsArrowUpRight} from "react-icons/bs";
import Link from "next/link";

type Props = {
    date: Date;
    amount: number;
}

export const HistoryItem = ({date, amount}: Props) => {
    return <Link href={{ pathname: '/history/detail', query: { startDate: date.toISOString() } }} className="no-underline">
        <div
            className="flex justify-between items-center shadow-md shadow-gray-200 mb-5 rounded-md px-5 py-4 cursor-pointer hover:bg-gray-100">
            <div className="flex justify-between items-center gap-5">
                {amount > 0 ? <BsArrowUpRight className="text-2xl text-green-500"/> :
                    <BsArrowDownRight className="text-2xl text-red-500"/>}
                <span className="text-gray-500">{toLongDate(date)}</span>
            </div>
            <span className="text-gray-500">{getCurrencyText(amount)}</span>
        </div>
    </Link>
}