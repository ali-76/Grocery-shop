import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

//TODO add close modal with "Esc" button
export function Portal({ children, onClose }: Props) {

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
        document.body.style.overflowY = "auto"
    }
  }, []);

  return createPortal(
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#efefef] z-10 bg-opacity-80 flex justify-center items-center" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("portal")!
  );
}
