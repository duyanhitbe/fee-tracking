import {useContext} from "react";
import {AppContext} from "@app/contexts/AppContext";
import {HiPlusSmall} from "react-icons/hi2";
import {BottomSheetCreateTagItem} from "@app/components/BottomSheetCreateTagItem";

export const BottomSheetCreateTag = () => {
    const {
        toggleBottomSheetCreateTag,
        isShowBottomSheetCreateTagItem,
        toggleBottomSheetCreateTagItem,
        tags,
        setTag
    } = useContext(AppContext)

    return <div
        className="tag w-full h-full absolute bottom-0 left-0 flex flex-col justify-center items-center">
        <div className="flex-1 w-full h-full bg-white opacity-90 cursor-pointer"
             onClick={() => {
                 toggleBottomSheetCreateTag()
             }}></div>
        <div
            className="flex-1 w-full h-full bg-white border-solid border-l-0 border-b-0 border-r-0 border-t border-t-gray-300 rounded-t-3xl">
            <p className="text-gray-400 text-center mt-5 text-xl uppercase">Tags</p>
            <div className="px-10 grid grid-cols-4 gap-6">
                <div
                    onClick={() => toggleBottomSheetCreateTagItem()}
                    className="cursor-pointer flex justify-center items-center rounded-full h-14 w-14 bg-white border-solid border border-gray-300">
                    <HiPlusSmall className="text-3xl text-gray-400"/>
                </div>
                {
                    tags.map((tag) =>
                        <div key={tag?._id} className="cursor-pointer flex flex-col justify-center items-center text-gray-500 gap-3"
                             onClick={() => {
                                 setTag(tag);
                                 toggleBottomSheetCreateTag();
                             }}>
                            <span className="text-lg">{tag?.icon}</span>
                            <span className="text-md">{tag?.title}</span>
                        </div>
                    )
                }
            </div>
        </div>
        {isShowBottomSheetCreateTagItem && <BottomSheetCreateTagItem/>}
    </div>
}