import React from "react";

type Props = {
    onClick: () => void;
    children: React.ReactNode;
    bgColor: string;
}

export const CommonButton = ({onClick, children, bgColor}: Props) => {
    return <div
        className={`cursor-pointer mt-10 text-gray-800 bg-${bgColor} rounded-lg flex justify-center items-center border-none outline-none text-center w-32 h-10`}
        onClick={() => onClick()}>
        {children}
    </div>
}