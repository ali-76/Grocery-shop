import  { useEffect } from "react";

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
        const handleKey = (e: KeyboardEvent) => {
          if(e.key === "Escape"){
            onClick();   
          }
        };

        if(isOverflowHidden){
            document.body.addEventListener("keyup" , handleKey)
        }else{
            document.body.removeEventListener("keyup" , handleKey)
        }
    
        return () => document.body.removeEventListener("keyup" , handleKey)
    }, [isOverflowHidden])

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