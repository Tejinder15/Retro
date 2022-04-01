import {useEffect,createContext,useContext,useReducer} from "react";
import { authReducer } from "../../Reducer/auth-reducer";

const defaultValue = {user:null,token:null};

const AuthContext = createContext(defaultValue);

const AuthProvider = ({children}) => {
    const [authState,authDispatch] = useReducer(authReducer,defaultValue);

    useEffect(()=>{
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        authDispatch({type:"CHECKUSER",payload:{token,user}});
    },[]);

    return(
        <AuthContext.Provider value={{authState,authDispatch}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export {AuthProvider,useAuth};