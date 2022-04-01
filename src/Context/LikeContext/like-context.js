import { createContext,useContext,useReducer } from "react";
import {LikeReducer} from "../../Reducer/like-reducer";

const LikeContext = createContext(null);

const LikeProvider = ({children}) => {
    const [LikeState,LikeDispatch] = useReducer(LikeReducer,{like:[]});

    return (
        <LikeContext.Provider value={{LikeState,LikeDispatch}}>
            {children}
        </LikeContext.Provider>
    )
}

const useLike = () => useContext(LikeContext);

export {LikeProvider,useLike};