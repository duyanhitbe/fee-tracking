"use client"
import {FeeItem} from "@app/components/FeeItem";
import {getCurrencyText, toVnd} from "@app/helpers/format.helper";
import {useContext} from "react";
import {AppContext} from "@app/contexts/AppContext";
import {Loading} from "@app/components/Loading";

export const ListFee = () => {
    const {fees, isLoadingFee} = useContext(AppContext)

    const calculateFeeToday = () => fees.reduce((prev, current) => prev + current.amount, 0)

    return (
        isLoadingFee
            ? <div className="flex justify-center flex-1 items-center w-full"><Loading/></div>
            : <>
                <div className="flex justify-between px-5 mb-4">
                    <span className="text-md text-gray-400">Today</span>
                    <span className="text-md text-gray-400">{getCurrencyText(calculateFeeToday())}</span>
                </div>

                {fees.map(({_id, tag, amount}) =>
                    <FeeItem key={_id} icon={tag?.icon || ''} title={tag?.title || ''} createdAt={new Date()}
                             amount={amount}/>
                )}
            </>
    )
}