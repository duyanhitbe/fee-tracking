import {FeeItem} from "@app/components/FeeItem";
import {toVnd} from "@app/helpers/format.helper";

export const ListFee = () => {
    return <>
        <div className="flex justify-between px-5 mb-4">
            <span className="text-md text-gray-400">Today</span>
            <span className="text-md text-gray-400">- {toVnd(800000)}</span>
        </div>

        <FeeItem icon={"👕"} title={"Quần áo"} createdAt={new Date()} amount={-200000}/>
        <FeeItem icon={"👞"} title={"Giày dép"} createdAt={new Date()} amount={-150000}/>
        <FeeItem icon={"🥕"} title={"Đi chợ"} createdAt={new Date()} amount={-300000}/>
        <FeeItem icon={"💵"} title={"Lương"} createdAt={new Date()} amount={15000000}/>
    </>
}