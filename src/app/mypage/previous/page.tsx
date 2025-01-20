// components
import TopBar from "@common/TopBar";

export default function Previous() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="지나간 컵캣" />
      <div className="w-full relative bg-Pale_Blue_2">
        {/* <span className="flex Headline_3 pt-6">
          지금까지 두 컵캣을
          <br />
          만났어요!
        </span> */}
      </div>
    </div>
  );
}
