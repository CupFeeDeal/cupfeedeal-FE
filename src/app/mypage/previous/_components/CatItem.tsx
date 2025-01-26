import Image from "next/image";

interface CatItemProps {
  cafeName: string;
  imageUrl: string;
}
const CatItem = ({ cafeName, imageUrl }: CatItemProps) => {
  return (
    <div className="flex flex-col justify-center">
      <span className="px-2.5 py-1 items-center justify-center text-center bg-white rounded-[27px] text-Main_Blue Caption_bold">
        {cafeName}의 컵캣
      </span>
      <Image src={imageUrl} height={129} width={88} alt={cafeName} />
    </div>
  );
};

export default CatItem;
