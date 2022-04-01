import { createContext,useContext,useReducer } from "react";
import {WatchLaterReducer} from "../../Reducer/watchlater-reducer";

const WatchLaterContext = createContext(null);

const WatchLaterProvider = ({children}) => {
    const [watchLaterState,watchLaterDispatch] = useReducer(WatchLaterReducer,{watchlater:[]});

    return (
        <WatchLaterContext.Provider value={{watchLaterState,watchLaterDispatch}}>
            {children}
        </WatchLaterContext.Provider>
    )
}

const useWatchLater = () => useContext(WatchLaterContext);

export {WatchLaterProvider,useWatchLater};