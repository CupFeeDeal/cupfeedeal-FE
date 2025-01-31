// components
import CatItem from "./CatItem";
import styles from "../_components/catPositions.module.css";
// icons
import { CupcatBg } from "@assets/icons";
// types
import { CupcatList } from "src/types/mypage";
// hooks
import { chunk, levelToCount, getColumnStyle } from "../_hooks/useCupcats";

interface SavedCatsProps {
  cupcatData: CupcatList;
}

const SavedCats = ({ cupcatData }: SavedCatsProps) => {
  const levelToCupcat = Math.floor(cupcatData.level / 5);
  const count = levelToCount[levelToCupcat] || "";
  const cupcats = cupcatData.cupcats;

  const catChunks = chunk(cupcats, 9);

  return (
    <div className="relative flex flex-col w-full h-screen bg-Blue_Grey">
      <div className="absolute flex flex-row w-full px-5 mt-6 justify-between">
        {cupcatData.level < 5 ? (
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

      {catChunks.length === 0 ? (
        <CupcatBg className="w-full mt-[243px] mb-[34px]" />
      ) : (
        catChunks.map((group, gIndex) => (
          <div key={gIndex} className="relative w-full">
            <CupcatBg className="w-full mt-[243px] mb-[34px]" />

            {group.map((cat, i) => {
              const rowIndex = Math.floor(i / 3);
              const colIndex = i % 3;
              const rowClass = `row-${rowIndex + 1}`;

              return (
                <div
                  key={i}
                  className={`${styles.catContainer} ${styles[rowClass]}`}
                  style={getColumnStyle(rowIndex, colIndex)}
                >
                  <CatItem cafeName={cat.cafe_name} cupcatId={cat.cupcat_id} />
                </div>
              );
            })}
          </div>
        ))
      )}
    </div>
  );
};
export default SavedCats;
