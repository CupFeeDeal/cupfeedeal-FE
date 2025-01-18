interface MypageModalProps {
  title: string;
  content: React.ReactNode;
  option: string;
  handleClick: () => void;
}
const MypageModal = ({
  title,
  content,
  option,
  handleClick,
}: MypageModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-100">
      <div className="z-110 flex flex-col bg-white items-center rounded-[10px] w-[350px] pt-10 px-[18px] pb-[18px]">
        <div className="Headline_3">{title}</div>
        <div>{content}</div>

        <div className="flex flex-row gap-2">
          <div className="flex justify-center items-center rounded-[10px] Body_1_bold text-Grey-600 bg-Pale_Blue_2 border-Blue_Grey border-solid">
            돌아가기
          </div>
          <div
            className="flex justify-center items-center rounded-[10px] Body_1_bold text-white bg-Main_Blue"
            onClick={handleClick}
          >
            {option}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageModal;
