"use client"
import {createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState} from "react";
import {ITag} from "@app/models/tag.model";
import {TagService} from "@app/services/tag.service";
import {IFee} from "@app/models/fee.model";
import {FeeService} from "@app/services/fee.service";
import {StatisticService} from "@app/services/statistic.service";

export interface IAppContext {
    isShowCreateItem: boolean;
    setIsShowCreateItem: Dispatch<SetStateAction<boolean>>;
    isShowBottomSheetCreateTag: boolean;
    setIsShowBottomSheetCreateTag: Dispatch<SetStateAction<boolean>>;
    feeInMonth: number;
    setFeeInMonth: Dispatch<SetStateAction<number>>;
    isShowBottomSheetCreateTagItem: boolean;
    setIsShowBottomSheetCreateTagItem: Dispatch<SetStateAction<boolean>>;
    toggleCreateItem: () => void;
    toggleBottomSheetCreateTag: () => void;
    toggleBottomSheetCreateTagItem: () => void;
    tags: ITag[];
    setTags: Dispatch<SetStateAction<ITag[]>>;
    fees: IFee[];
    setFees: Dispatch<SetStateAction<IFee[]>>;
    tag: ITag;
    setTag: Dispatch<SetStateAction<ITag>>;
    isLoadingTag: boolean;
    setLoadingTag: Dispatch<SetStateAction<boolean>>;
    isLoadingFee: boolean;
    setLoadingFee: Dispatch<SetStateAction<boolean>>;
    isLoadingFeeInMonth: boolean;
    setLoadingFeeInMonth: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<IAppContext>({
    isShowCreateItem: false,
    setIsShowCreateItem: () => {
    },
    isShowBottomSheetCreateTag: false,
    setIsShowBottomSheetCreateTag: () => {
    },
    feeInMonth: 0,
    setFeeInMonth: () => {
    },
    isShowBottomSheetCreateTagItem: false,
    setIsShowBottomSheetCreateTagItem: () => {
    },
    tags: [],
    setTags: () => {
    },
    fees: [],
    setFees: () => {
    },
    isLoadingFeeInMonth: false,
    setLoadingFeeInMonth: () => {
    },
    isLoadingTag: false,
    setLoadingTag: () => {
    },
    isLoadingFee: false,
    setLoadingFee: () => {
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
    const [fees, setFees] = useState<IFee[]>([])
    const [tag, setTag] = useState<ITag>({} as any)
    const [isLoadingTag, setLoadingTag] = useState(true);
    const [isLoadingFee, setLoadingFee] = useState(true);
    const [isLoadingFeeInMonth, setLoadingFeeInMonth] = useState(true);
    const [feeInMonth, setFeeInMonth] = useState(0);

    useEffect(() => {
        TagService.getAllTags().then((tags) => {
            setTags(tags);
            setTag(tags[0]);
            setLoadingTag(false);
        });
        FeeService.getAllFeesToday().then(fees => {
            setFees(fees);
            setLoadingFee(false);
        })
        StatisticService.getInTotalMonth().then((total) => {
            setFeeInMonth(total);
            setLoadingFeeInMonth(false);
        })
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
        setTag,
        isLoadingTag,
        setLoadingTag,
        fees,
        setFees,
        isLoadingFee,
        setLoadingFee,
        feeInMonth,
        setFeeInMonth,
        isLoadingFeeInMonth,
        setLoadingFeeInMonth
    }}>
        {children}
    </AppContext.Provider>
}