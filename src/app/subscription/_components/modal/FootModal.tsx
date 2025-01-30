import Modal from "@common/Modal";
import { BasicCafeModalProps } from "src/types/modal";
import { FootBasic } from "@assets/icons";

const FootModal = ({ isOpen, onClose, cafe_name }: BasicCafeModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} showCloseButton>
    <div className="flex flex-col justify-center items-center py-5">
      <h5 className="Body_1_med text-Grey-700 mb-2">
        커피 반 잔 만큼 아꼈어요
      </h5>
      <h3 className="Headline_3 text-center mb-4">
        {cafe_name}에<br />
        발자국을 찍었어요!
      </h3>
      <FootBasic className="w-24" />
    </div>
  </Modal>
);

export default FootModal;
