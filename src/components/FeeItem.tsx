import {toShortDate, toVnd} from "@app/helpers/format.helper";

type Props = {
    icon: string;
    title: string;
    createdAt: Date;
    amount: number;
}

export const FeeItem = (props: Props) => {
    return <div className="flex justify-between items-center px-5 py-3">
        <span className="text-4xl">{props.icon}</span>
        <div className="flex flex-col flex-1 px-4">
            <span className="text-lg text-gray-700">{props.title}</span>
            <span className="text-gray-400 text-sm">{toShortDate(props.createdAt)}</span>
        </div>
        <span
            className={props.amount < 0 ? "text-red-500" : "text-green-500"}>{props.amount > 0 && "+"}{toVnd(props.amount)}</span>
    </div>
}