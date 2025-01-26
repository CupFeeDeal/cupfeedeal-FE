"use client";

//import { userApi } from "@api/user";
import { CupcatBg } from "@assets/icons";
import { useState } from "react";
//import { Cupcat } from "src/types/mypage";
import CatItem from "./CatItem";
import { cupcatData } from "./mock";

function chunk<T>(array: T[], size: number) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const catPositions = [
  { top: "20.5%", left: "5%" },
  { top: "20.5%", right: "30%" },
  { top: "20.5%", right: "5%" },

  { top: "48%", left: "3%" },
  { top: "48%", left: "27%" },
  { top: "48%", left: "52%" },

  { top: "75%", left: "20%" },
  { top: "75%", right: "30%" },
  { top: "75%", right: "5%" },
];

const SavedCats = () => {
  const [level, setLevel] = useState(0);
  console.log(setLevel); // 미사용 변수로 임시 콘솔
  //const [cupcats, setCupcats] = useState<Cupcat[]>([]);

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

  const count = levelToCount[level] || "";

  // useEffect(() => {
  //   const fetchSavedCupcats = async () => {
  //     try {
  //       const response = await userApi.getCupcats();
  //       setLevel(response.level);
  //       setCupcats(response.cupcats);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchSavedCupcats();
  // }, []);

  const cupcats = cupcatData.result.cupcats;

  const catChunks = chunk(cupcats, 9);

  return (
    <div className="relative flex flex-col w-full h-screen bg-Blue_Grey">
      <div className="absolute flex flex-row w-full px-5 mt-6 justify-between">
        {level === 0 ? (
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
          Lv.{level}
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
