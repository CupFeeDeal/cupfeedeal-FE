import Modal from "@common/Modal";
import { CancelBfModalProps } from "src/types/modal";

const CancelBfModal = ({
  isOpen,
  onClose,
  cafe,
  remain,
  onConfirm,
}: CancelBfModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    cancelText="구독 유지하기"
    confirmText="구독 취소하기"
    onConfirm={onConfirm}
  >
    {/* 모달 내용 */}
    <div className="flex flex-col justify-center items-center py-5">
      <h3 className="Headline_3">{cafe}</h3>
      <p className="Caption_med text-Grey-500 px-2 py-1 border border-Grey-300 rounded-3xl mt-3 mb-10">
        만료까지 {remain}일 남았어요
      </p>
      <h5 className="Body_1_bold text-center mb-7">
        취소 시 남은 일수의
        <br />
        70%에 해당하는 금액만 환불됩니다.
        <br />
        정말 취소하시겠어요?
      </h5>
    </div>
  </Modal>
);

export default CancelBfModal;
