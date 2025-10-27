import  { useEffect } from "react";

interface Props {
    onClick : ()=> void;
    isOverflowHidden? : boolean;
    isDropdownOpen? : boolean;
}

export function useOverlay({onClick , isOverflowHidden = false , isDropdownOpen = false} : Props){

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

        if(isDropdownOpen){
            document.body.addEventListener("keyup" , handleKey)
        }else{
            document.body.removeEventListener("keyup" , handleKey)
        }
    
        return () => document.body.removeEventListener("keyup" , handleKey)
    }, [isDropdownOpen])

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