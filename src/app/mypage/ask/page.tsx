// components
import TopBar from "@common/TopBar";
import AskContents from "./_components/AskContents";

export default function Ask() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="문의하기" />
      <div className="w-full relative">
        <AskContents />
      </div>
    </div>
  );
}
