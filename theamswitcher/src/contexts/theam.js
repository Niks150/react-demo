import { createContext , useContext  } from "react";

export const TheameContext = createContext({
    theamMode : "light ",
    DarkTheame :() => {},
    LightTheame :() => {},

});

export const TheameProvider = TheameContext.Provider

export default function useTheame(){
    return useContext(TheameContext)
}