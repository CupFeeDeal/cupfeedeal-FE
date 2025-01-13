import Image from "next/image";

interface RecommendCardProps {
  img: string;
  name: string;
  location: string;
  price: number;
}

export const RecommendCard = ({
  img,
  name,
  location,
  price,
}: RecommendCardProps) => (
  <article className="flex flex-col p-3 rounded-lg shadow-card gap-3">
    {/* 카페 이미지 */}
    <div className="w-48 h-32 relative rounded-lg shrink-0 overflow-hidden">
      {img ? (
        <Image
          src={img}
          alt={`${name} 카페 사진`}
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-300" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.59)_100%)]" />
      <h5 className="absolute bottom-3 left-3 Subhead_1_bold  text-white truncate w-[85%]">
        {name}
      </h5>
    </div>

    {/* 카페 정보 */}
    <div className="flex gap-3">
      <p className="Body_2_bold w-7 shrink-0">주소</p>
      <p className="Body_2_med line-clamp-2">{location}</p>
    </div>
    <div className="flex gap-3">
      <p className="Body_2_bold w-7 shrink-0">가격</p>
      <p className="Body_2_med">₩{price.toLocaleString()} 부터</p>
    </div>

    {/* 버튼 */}
    <button className="Body_2_bold text-white bg-Grey-800 w-full h-10 rounded-lg">
      자세히 보기
    </button>
  </article>
);
