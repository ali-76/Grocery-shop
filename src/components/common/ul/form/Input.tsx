import { useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  type?: "text" | "password" | "email" | "tel" | "number";
  label?: string;
  placeholder?: string;
  register: UseFormRegisterReturn<any>
}

export function Input({ label, type = "text", placeholder = "", register }: Props) {

    const id = useId();
  return (
    <div className="flex flex-col items-start gap-2 mb-8">
      {label && <label className="text-nowrap font-bold" htmlFor={id}>Username</label>}
      <input
        className="w-full rounded-lg p-4 outline-slate-100"
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
}
