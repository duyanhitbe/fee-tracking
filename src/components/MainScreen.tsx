"use client"
import {getCurrencyText} from "@app/helpers/format.helper";
import {useContext} from "react";
import {AppContext} from "@app/contexts/AppContext";
import {Loading} from "@app/components/Loading";

type Props = {
    title: string;
    isLoading: boolean;
    amount: number;
}

export const MainScreen = ({title, isLoading, amount}: Props) => {


    return <div className="flex flex-col justify-center items-center h-[20rem]">
        <div className="text-gray-400 text-md text-center m-1">{title}</div>
        {
            isLoading ? <Loading/> :
                <div
                    className={`text-center text-5xl m-1 ${amount === 0 ? "text-gray-300" : amount < 0 ? "text-red-500" : "text-green-500"}`}>{getCurrencyText(amount)}</div>
        }
    </div>
}