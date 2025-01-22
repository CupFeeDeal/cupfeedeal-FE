import Modal from "@common/Modal";
import { BasicCafeModalProps } from "src/types/modal";

const CancelAfModal = ({ isOpen, onClose, cafe }: BasicCafeModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} showCloseButton>
    <div className="flex flex-col justify-center items-center py-5">
      <h3 className="Headline_3">{cafe}</h3>
      <div className="w-12 h-12 bg-slate-400 my-6" />
      <h5 className="Body_1_bold text-center">
        구독이 취소되었어요.
        <br />
        다른 커피로 또 만나요!
      </h5>
    </div>
  </Modal>
);

export default CancelAfModal;
