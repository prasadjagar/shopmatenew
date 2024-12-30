import { useEffect } from "react";

export const UseTitle=(title)=>{
    useEffect(()=>{
        document.title = `${title} | Shopping carrr`
    }, [title])
    return null;
}