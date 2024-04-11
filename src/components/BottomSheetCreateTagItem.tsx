import {useContext, useState} from "react";
import {AppContext} from "@app/contexts/AppContext";
import {CommonButton} from "@app/components/CommonButton";
import {TagService} from "@app/services/tag.service";
import {toast} from "react-toastify";
import EmojiPicker from "emoji-picker-react";
import {EmojiClickData} from "emoji-picker-react/src/types/exposedTypes";

export const BottomSheetCreateTagItem = () => {
    const {toggleBottomSheetCreateTagItem} = useContext(AppContext)
    const [icon, setIcon] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [type, setType] = useState<string>("SPEND")
    const {setTags, tags} = useContext(AppContext);
    const [isShowEmojiPicker, setShowEmojiPicker] = useState<boolean>(false)

    const onSubmit = () => {
        if (icon.length === 0 || title.length === 0) {
            toast.error("Icon and title is required")
            return;
        }

        const createTag = TagService.createTag({icon, title, type})
        toast.promise(createTag, {
            pending: "Creating tag",
            success: "Create tag successfully!",
            error: "Create tag failure"
        }).then((tag) => {
            tags.push(tag);
            setTags(tags);
            toggleBottomSheetCreateTagItem();
        })
    }

    return <div
        className="tag w-full h-full absolute bottom-0 left-0 flex flex-col justify-center items-center">
        <div className="flex-1 w-full h-full bg-white opacity-70 cursor-pointer"
             onClick={() => {
                 toggleBottomSheetCreateTagItem()
             }}></div>
        <form
            className="flex-1 w-full h-full bg-white border-solid border-l-0 border-b-0 border-r-0 border-t border-t-gray-300 rounded-t-3xl">
            <div
                className="flex justify-start items-center flex-col">
                <p className="text-gray-400 text-center mt-5 text-xl uppercase">New tag</p>
                <input
                    readOnly
                    value={icon}
                    onFocus={() => setShowEmojiPicker(true)}
                    onChange={(e) => setIcon(e.target.value)}
                    placeholder="👕 icon"
                    className="placeholder:text-gray-300 text-center pb-3 text-3xl mt-5 m-0 w-56 bg-transparent outline-none text-gray-400 border-solid border-b border-l-0 border-r-0 border-t-0 border-b-gray-300"/>
                <EmojiPicker open={isShowEmojiPicker} onEmojiClick={(emoji: EmojiClickData) => {
                    setIcon(emoji.emoji)
                    setShowEmojiPicker(false)
                }}/>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="name"
                    className="placeholder:text-gray-300 text-center pb-3 text-3xl mt-5 m-0 w-56 bg-transparent outline-none text-gray-400 border-solid border-b border-l-0 border-r-0 border-t-0 border-b-gray-300"/>
                <select
                    onChange={(e) => setType(e.target.value)}
                    className="text-center pb-3 text-3xl mt-5 m-0 w-56 bg-transparent outline-none text-gray-400 border-solid border-b border-l-0 border-r-0 border-t-0 border-b-gray-300">
                    <option selected value="SPEND">Chi</option>
                    <option value="COLLECT">Thu</option>
                </select>
                <CommonButton
                    type="button"
                    bgColor="amber-200"
                    onClick={() => onSubmit()}>Add
                </CommonButton>
            </div>
        </form>
    </div>
}