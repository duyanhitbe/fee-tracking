"use client"
import {createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState} from "react";
import {ITag} from "@app/models/tag.model";
import {TagService} from "@app/services/tag.service";

export interface IAppContext {
    isShowCreateItem: boolean;
    setIsShowCreateItem: Dispatch<SetStateAction<boolean>>;
    isShowBottomSheetCreateTag: boolean;
    setIsShowBottomSheetCreateTag: Dispatch<SetStateAction<boolean>>;
    isShowBottomSheetCreateTagItem: boolean;
    setIsShowBottomSheetCreateTagItem: Dispatch<SetStateAction<boolean>>;
    toggleCreateItem: () => void;
    toggleBottomSheetCreateTag: () => void;
    toggleBottomSheetCreateTagItem: () => void;
    tags: ITag[];
    setTags: Dispatch<SetStateAction<ITag[]>>;
    tag: ITag;
    setTag: Dispatch<SetStateAction<ITag>>;
}

export const AppContext = createContext<IAppContext>({
    isShowCreateItem: false,
    setIsShowCreateItem: () => {
    },
    isShowBottomSheetCreateTag: false,
    setIsShowBottomSheetCreateTag: () => {
    },
    isShowBottomSheetCreateTagItem: false,
    setIsShowBottomSheetCreateTagItem: () => {
    },
    tags: [],
    setTags: () => {
    },
    tag: {} as any,
    setTag: () => {
    },
    toggleCreateItem: () => {
    },
    toggleBottomSheetCreateTag: () => {
    },
    toggleBottomSheetCreateTagItem: () => {
    },
})

type Props = {
    children: ReactNode;
}

export const AppContextProvider = ({children}: Props) => {
    const [isShowCreateItem, setIsShowCreateItem] = useState<boolean>(false);
    const [isShowBottomSheetCreateTag, setIsShowBottomSheetCreateTag] = useState<boolean>(false);
    const [isShowBottomSheetCreateTagItem, setIsShowBottomSheetCreateTagItem] = useState<boolean>(false);
    const [tags, setTags] = useState<ITag[]>([])
    const [tag, setTag] = useState<ITag>({} as any)

    useEffect(() => {
        TagService.getAllTags().then((tags) => {
            setTags(tags);
            setTag(tags[0]);
        });
    }, [])

    const toggleCreateItem = () => {
        setIsShowCreateItem(!isShowCreateItem);
    }

    const toggleBottomSheetCreateTag = () => {
        setIsShowBottomSheetCreateTag(!isShowBottomSheetCreateTag);
    }

    const toggleBottomSheetCreateTagItem = () => {
        setIsShowBottomSheetCreateTagItem(!isShowBottomSheetCreateTagItem);
    }

    return <AppContext.Provider value={{
        isShowCreateItem,
        setIsShowCreateItem,
        isShowBottomSheetCreateTag,
        setIsShowBottomSheetCreateTag,
        isShowBottomSheetCreateTagItem,
        setIsShowBottomSheetCreateTagItem,
        toggleCreateItem,
        toggleBottomSheetCreateTag,
        toggleBottomSheetCreateTagItem,
        tags,
        setTags,
        tag,
        setTag
    }}>
        {children}
    </AppContext.Provider>
}