import {FeeItem} from "@app/components/FeeItem";
import {toVnd} from "@app/helpers/format.helper";
import {Tags} from "@app/constants/tags.constant";

export const ListFee = () => {
    return <>
        <div className="flex justify-between px-5 mb-4">
            <span className="text-md text-gray-400">Today</span>
            <span className="text-md text-gray-400">- {toVnd(800000)}</span>
        </div>

        {
            Tags.map(({icon, title}) =>
                <FeeItem key={icon} icon={icon} title={title} createdAt={new Date()} amount={-200000}/>
            )
        }
    </>
}