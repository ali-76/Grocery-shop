import { ReactNode } from "react";
import { Portal } from "../portal";

interface Props {
  children: ReactNode;
  title: string;
  closeModal: () => void;
}

export function Modal({ children, title, closeModal }: Props) {
  return (
    <Portal onClose={closeModal }>
      <div className={`z-10 min-w-[100vw] md:min-w-[50vw] min-h-[100vh] md:min-h-[50vh] max-h-[100vh] overflow-auto border rounded bg-gray-100`}>
        <div className="flex justify-between rounded bg-white px-8 py-5 text-[22px] font-bold">
          <div onClick={closeModal} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
              <path
                d="M19.41 10.59L17 13l2.41 2.41a1 1 0 0 1-1.41 1.41L15.59 14.41 13.17 16.83a1 1 0 0 1-1.41-1.41L14.17 13 11.76 10.59a1 1 0 0 1 1.41-1.41L15.59 11.17l2.41-2.41a1 1 0 1 1 1.41 1.41z"
                fill="currentColor"
              />
            </svg>
          </div>
          {title}
        </div>
        <div className={"p-8 text-[18px]"}>
          {children}
        </div>
      </div>
    </Portal>
  );
}
