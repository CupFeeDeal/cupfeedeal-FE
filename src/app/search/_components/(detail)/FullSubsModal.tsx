import Modal from "@common/Modal";
import { BasicModalProps } from "src/types/modal";
import { LoginModalImg } from "@assets/icons";

const FullSubsModal = ({ isOpen, onClose }: BasicModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={true}>
      <div className="flex flex-col items-center">
        <div className="Headline_3 mt-9 text-center">
          이미 3개의 구독권을
          <br />
          이용중이에요
        </div>
        <LoginModalImg width={102} height={102} className="my-6" />
      </div>
    </Modal>
  );
};

export default FullSubsModal;
