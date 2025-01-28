import Modal from "@common/Modal";
import { BasicCafeModalProps } from "src/types/modal";
import { HappyCat } from "@assets/icons";

const NewAfModal = ({
  isOpen,
  onClose,
  cafe_name,
  onConfirm,
}: BasicCafeModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    onConfirm={onConfirm}
    confirmText="구독권 바로가기"
    showCloseButton
  >
    <div className="flex flex-col justify-center items-center pt-5">
      <h3 className="Headline_3 text-center">
        {cafe_name}
        <br />
        구독권을 구매했어요!
      </h3>
      <HappyCat className="w-[25%] my-7" />
    </div>
  </Modal>
);

export default NewAfModal;
