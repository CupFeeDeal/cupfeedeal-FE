import Modal from "@common/Modal";
import { ManageModalProps } from "src/types/modal";
import TopBar from "@common/TopBar";
import { HalfCat } from "@assets/icons";
import { formatDate } from "@app/subscription/_utils/FormatDate";

// 구독 시작일, 만료일 정보 box
interface DateBoxProps {
  label: string;
  date: string;
  isExpiry?: boolean;
}

const DateBox = ({ label, date, isExpiry = false }: DateBoxProps) => (
  <div className="flex flex-col gap-4 py-4 items-center text-center bg-white rounded-2xl w-full">
    <p className="Body_2_med">{label}</p>
    <h4
      className={`Subhead_1_bold whitespace-pre-line ${
        isExpiry ? "text-Red" : ""
      }`}
    >
      {formatDate(date, "korean")}
    </h4>
  </div>
);

const ManageModal = ({
  isOpen,
  onClose,
  cafe,
  menu,
  period,
  price,
  start,
  end,
  visit,
}: ManageModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} fullPage>
    <TopBar title={`${cafe} 구독권 관리`} onBack={onClose} />

    {/* 구독 정보 */}
    <div className="flex-1 overflow-auto p-5 space-y-4">
      <div className="w-full py-5 px-6 bg-gradient-to-r from-[#9596FD] to-[#D2A7E1] text-white rounded-2xl space-y-1">
        <h3 className="Headline_3">{cafe}</h3>
        <h5 className="Body_1_bold">
          {menu} ∙ {period}주권 ∙ ₩{price.toLocaleString()}
        </h5>
      </div>

      {/* 방문수 및 만료일 */}
      <div className="flex flex-col px-4 rounded-2xl bg-Pale_Blue_2 items-center">
        <h5 className="Body_1_bold py-6">
          지금까지 {cafe} 카페를 {visit}번 방문했어요!
        </h5>
        <div className="flex justify-between gap-3 w-full mb-9">
          <DateBox label="구독 시작일" date={start} />
          <DateBox label="구독 만료 예정일" date={end} isExpiry />
        </div>
        <HalfCat />
      </div>

      {/* 버튼 */}
      <div className="pt-8 space-y-4">
        <button className="btn-confirm">구독 연장하기</button>
        <button className="btn-cancel">구독 취소하기</button>
      </div>
    </div>
  </Modal>
);

export default ManageModal;
