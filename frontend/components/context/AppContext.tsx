"use client"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface AppContextTypes {
    sidebarOpen: boolean,
    setSidebarOpen: Dispatch<SetStateAction<boolean>>,
}

export const AppContext = createContext<AppContextTypes | undefined>(undefined);

 function ProviderFunction(props: {children: React.ReactNode}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <AppContext.Provider value={{sidebarOpen, setSidebarOpen}}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useProvider = () => {
    const context = useContext(AppContext);
    if(!context) throw new Error("Context not found");
    return context
}

export default ProviderFunction;