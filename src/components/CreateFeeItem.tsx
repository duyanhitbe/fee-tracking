"use client"
import {LiaAngleDownSolid} from "react-icons/lia";
import {TfiReload} from "react-icons/tfi";
import {useContext, useState} from "react";
import {AppContext} from "@app/contexts/AppContext";
import CurrencyInput from "react-currency-input-field";
import {BottomSheetCreateTag} from "@app/components/BottomSheetCreateTag";
import {CommonButton} from "@app/components/CommonButton";

export const CreateFeeItem = () => {
    const {
        isShowCreateItem,
        isShowBottomSheetCreateTag,
        toggleCreateItem,
        toggleBottomSheetCreateTag,
        tag
    } = useContext(AppContext);
    const [amount, setAmount] = useState(0);

    const onChangeAmount = (value: string | undefined) => {
        const num = +(value || 0);
        setAmount(num);
    }

    return (isShowCreateItem ? <>
        <div
            className="layout-create-item bg-white w-full h-full absolute opacity-95 top-0 left-0">
            <form className="w-full h-full flex flex-col justify-center items-center opacity-95">
                <span className="text-gray-400 text-md mb-3">Today at Wed April 10 2024</span>
                <CurrencyInput intlConfig={{locale: 'vi-VN', currency: 'VND'}}
                               value={amount}
                               onValueChange={(value) => onChangeAmount(value)}
                               className="text-center pb-3 text-5xl m-0 w-56 bg-transparent outline-none text-gray-400 border-solid border-b border-l-0 border-r-0 border-t-0 border-b-gray-300"/>
                <LiaAngleDownSolid className="text-5xl text-gray-300 mt-10"/>
                <div className="cursor-pointer mt-10 flex justify-center items-center text-xl text-gray-800 gap-5"
                     onClick={() => {
                         toggleBottomSheetCreateTag()
                     }}>
                    <span>{tag?.icon || '🤷‍♂️'}</span>
                    <span>{tag?.title || "No tag available"}</span>
                    <TfiReload/>
                </div>
                <div className="mt-10 flex justify-center items-center gap-5">
                    <CommonButton
                        bgColor="gray-300"
                        onClick={() => {
                            toggleCreateItem()
                        }}>Cancel
                    </CommonButton>
                    <CommonButton
                        bgColor="amber-200"
                        onClick={() => {
                            toggleCreateItem()
                        }}>Add
                    </CommonButton>
                </div>
            </form>
        </div>
        {isShowBottomSheetCreateTag && <BottomSheetCreateTag/>}
    </> : <></>)
};