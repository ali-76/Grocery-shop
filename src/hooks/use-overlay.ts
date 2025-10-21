import { useEffect, KeyboardEvent } from "react";

interface Props {
    onClick : ()=> void;
    isOverflowHidden? : boolean;
}

export function useOverlay({onClick , isOverflowHidden = false} : Props){
    useEffect(()=>{
        const clickHandler = () => onClick();
       
        document.addEventListener("click" , clickHandler)
    
        return () => document.removeEventListener("click" , clickHandler)
    },[])

    useEffect(()=>{
        const handleKey = (e: globalThis.KeyboardEvent) => {
          if(e.key === "Escape"){
            onClick()     
          }
        };
    
        document.body.addEventListener("keyup" , handleKey)
    
        return () => document.body.removeEventListener("keyup" , handleKey)
      }, [])

    useEffect(() => {
        if(isOverflowHidden){
            document.body.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = "auto"
        }
        
        return ()=>{
            document.body.style.overflowY = "auto"
        }
    },[isOverflowHidden])
}