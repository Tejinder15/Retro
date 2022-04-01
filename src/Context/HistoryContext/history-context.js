import { createContext,useContext,useReducer } from "react";
import {HistoryReducer} from "../../Reducer/history-reducer";

const HistoryContext = createContext(null);

const HistoryProvider = ({children}) => {
    const [HistoryState,HistoryDispatch] = useReducer(HistoryReducer,{history:[]});

    return (
        <HistoryContext.Provider value={{HistoryState,HistoryDispatch}}>
            {children}
        </HistoryContext.Provider>
    )
}

const useHistory = () => useContext(HistoryContext);

export {HistoryProvider,useHistory};