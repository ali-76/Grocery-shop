import { Modal } from "../ul";
import { useModal } from "@/store/ModalContext";

export function LoginModal() {

  const {openModal , closeModal} = useModal();

  return(
    <Modal title={"Login"} closeModal={closeModal}>
      <form action="">
        <p className="text-sm mt-4">Don't have an account?<span onClick={() => openModal("register")} className="text-cyan-400 font-bold cursor-pointer"> Register</span></p>
        
      </form>
    </Modal>
  );
}
