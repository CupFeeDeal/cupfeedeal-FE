// components
import CatItem from "./CatItem";
// icons
import { CupcatBg } from "@assets/icons";
// types
import { CupcatList } from "src/types/mypage";
// hooks
import { catPositions, chunk } from "../_hooks/useCupcats";

interface SavedCatsProps {
  cupcatData: CupcatList;
}

const SavedCats = ({ cupcatData }: SavedCatsProps) => {
  const levelToCount: { [key: number]: string } = {
    1: "한",
    2: "두",
    3: "세",
    4: "네",
    5: "다섯",
    6: "여섯",
    7: "일곱",
    8: "여덟",
    9: "아홉",
    10: "열",
  };

  const count = levelToCount[cupcatData.level] || "";
  const cupcats = cupcatData.cupcats;

  const catChunks = chunk(cupcats, 9);

  return (
    <div className="relative flex flex-col w-full h-screen bg-Blue_Grey">
      <div className="absolute flex flex-row w-full px-5 mt-6 justify-between">
        {cupcatData.level === 0 ? (
          <span className="flex Headline_3">
            아직 만난
            <br />
            컵캣이 없어요.
          </span>
        ) : (
          <span className="flex Headline_3">
            지금까지 {count} 컵캣을
            <br />
            만났어요!
          </span>
        )}
        <span className="flex flex-row w-auto h-[26px] items-center Body_1_bold text-white py-0.5 px-5 gap-1 bg-Dark_Blue mb-3 rounded-[38px]">
          Lv.{cupcatData.level}
        </span>
      </div>

      {catChunks.map((group, gIndex) => (
        <div key={gIndex} className="relative w-full">
          <CupcatBg className="w-full mt-[243px] mb-[34px]" />
          {group.map((cat, i) => {
            // const { top, left } = catPositions[i];
            const position = catPositions[i] || {};
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: position.top,
                  left: position.left,
                  right: position.right,
                }}
              >
                <CatItem
                  cafeName={cat.cafe_name}
                  imageUrl={cat.cupcat_img_url}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SavedCats;
