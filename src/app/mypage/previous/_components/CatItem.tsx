// hooks
import { useCupcatImg } from "src/hooks/useCupcatImg";

interface CatItemProps {
  cafeName: string;
  cupcatId: number;
}
const CatItem = ({ cafeName, cupcatId }: CatItemProps) => {
  const CupcatSvg = useCupcatImg(cupcatId);

  return (
    <div className="flex flex-col justify-center">
      <span className="mb-2.5 px-2.5 py-1 items-center justify-center text-center bg-white rounded-[27px] text-Main_Blue Caption_bold">
        {cafeName}의 컵캣
      </span>
      <div className="w-[88px] h-auto">
        <CupcatSvg className="w-full h-full" />
      </div>
    </div>
  );
};

export default CatItem;
