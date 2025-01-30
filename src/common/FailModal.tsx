import Modal from "@common/Modal";
import { LoginModalImg } from "@assets/icons";

interface FailModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const FailModal = ({ isOpen, onClose, message }: FailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={true}>
      <div className="flex flex-col items-center">
        <div className="Headline_3 mt-9 text-center">
          {message}에
          <br />
          실패했어요!
        </div>
        <LoginModalImg width={102} height={102} className="my-6" />
      </div>
    </Modal>
  );
};

export default FailModal;
