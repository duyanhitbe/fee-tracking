"use client"
import {getCurrencyColor, getCurrencyText, toVnd} from "@app/helpers/format.helper";
import {useContext} from "react";
import {AppContext} from "@app/contexts/AppContext";
import {Loading} from "@app/components/Loading";

export const MainScreen = () => {
    const {isLoadingFeeInMonth, feeInMonth} = useContext(AppContext)

    return <div className="flex flex-col justify-center items-center h-[20rem]">
        <div className="text-gray-400 text-md text-center m-1">Spent this month</div>
        {
            isLoadingFeeInMonth ? <Loading/> :
                <div className={`text-center text-5xl m-1 ${getCurrencyColor(feeInMonth)}`}>{getCurrencyText(feeInMonth)}</div>
        }
    </div>
}