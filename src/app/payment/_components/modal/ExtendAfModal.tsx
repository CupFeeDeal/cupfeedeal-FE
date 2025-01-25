import Modal from "@common/Modal";
import { BasicCafeModalProps } from "src/types/modal";
import { HappyCat } from "@assets/icons";

const ExtendAfModal = ({ isOpen, onClose, cafe }: BasicCafeModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} showCloseButton>
    <div className="flex flex-col justify-center items-center py-5">
      <h3 className="Headline_3">{cafe}</h3>
      <HappyCat className="w-[25%] my-6" />
      <h5 className="Body_1_bold text-center">
        구독이 연장되었어요.
        <br />
        앞으로도 맛있는 커피를 즐겨봐요!
      </h5>
    </div>
  </Modal>
);

export default ExtendAfModal;
