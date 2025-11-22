import { useForm } from "react-hook-form";
import { Input, Modal } from "../ul";
import { useModal } from "@/store/ModalContext";

interface FormData {
  username : string;
  email : string;
  password : string;
}


export function RegisterModal() {

  const {register, handleSubmit, formState:{errors}}= useForm<FormData>()

  const {openModal, closeModal} = useModal()

  const onSubmit = (data : FormData) => {

  }

  return(
    <Modal title={"Register"} closeModal={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)} className="px-4 md:px-10">

        <Input label="Username" placeholder="enter your username" register={register("username",{required: "Please enter your username", minLength:{value: 3, message:"min 3 characters"}})}/>

        {/* <div className="flex flex-col items-start gap-2 mb-8">
          <label className="text-nowrap font-bold" htmlFor="username">Username</label>
          <input className="w-full rounded-lg p-4 outline-slate-100" type="text" id="username" placeholder="enter your username" {...register("username",{required: "Please enter your username", minLength:{value: 3, message:"min 3 characters"}})}/>
        </div> */}

        <div className="flex flex-col items-start gap-2 mb-8">
          <label className="text-nowrap font-bold" htmlFor="email">email</label>
          <input className="w-full rounded-lg p-4 outline-slate-100" type="email" id="email" placeholder="enter your email" {...register("email",{required: "Please enter your email"})}/>
        </div>

        <div className="flex flex-col items-start gap-2 mb-8">
          <label className="text-nowrap font-bold" htmlFor="password">password</label>
          <input className="w-full rounded-lg p-4 outline-slate-100" type="password" id="password" placeholder="enter your password" {...register("password",{required: "Please enter your password"})}/>
        </div>

        <button className="mt-2 bg-green-400 text-white px-8 py-2 rounded cursor-pointer">submit</button>

        <p className="text-sm mt-4">Do you have an account?<span onClick={() => openModal("login")} className="text-cyan-400 font-bold cursor-pointer"> Login</span></p>
      </form>
    </Modal>
  );
}
