import Modal from "@common/Modal";
import { LoginModalProps } from "src/types/modal";
import { LoginModalImg } from "@assets/icons";

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      showCloseButton={true}
      confirmText="로그인하기"
      onConfirm={onLogin}
    >
      <div className="flex flex-col items-center">
        <div className=" Headline_3 mt-9">
          즐겨찾기를 보려면
          <br />
          로그인이 필요해요
        </div>
        <LoginModalImg width={102} height={102} className="my-6" />
      </div>
    </Modal>
  );
};

export default LoginModal;
