import {createContext, ReactNode} from "react";

export interface IAppContext {
}

export const AppContext = createContext<IAppContext>({})

type Props = {
    children: ReactNode;
}

export const AppContextProvider = ({children}: Props) => {
    return <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
}