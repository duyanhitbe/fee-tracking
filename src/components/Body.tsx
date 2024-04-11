"use client"
import {MainScreen} from "@app/components/MainScreen";
import {ListFee} from "@app/components/ListFee";
import {useContext} from "react";
import {AppContext} from "@app/contexts/AppContext";

export const Body = () => {
    const {isLoadingFeeInMonth, feeInMonth, fees, isLoadingFee} = useContext(AppContext)

    return <>
        <MainScreen isLoading={isLoadingFeeInMonth} amount={feeInMonth} title="Spent this month"/>
        <ListFee fees={fees} loading={isLoadingFee}/>
    </>
}