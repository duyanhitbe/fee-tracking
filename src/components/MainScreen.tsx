import {toVnd} from "@app/helpers/format.helper";

export const MainScreen = () => {
    return <div className="flex flex-col justify-center items-center h-[20rem]">
        <div className="text-gray-400 text-md text-center m-1">Spent this month</div>
        <div className="text-center text-red-600 text-5xl m-1">-{toVnd(12000000)}</div>
    </div>
}