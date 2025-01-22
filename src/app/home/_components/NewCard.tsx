import Image from "next/image";

interface NewCardProps {
  img: string;
  name: string;
  location: string;
}

const NewCard = ({ img, name, location }: NewCardProps) => (
  <article className="space-y-3 p-3 rounded-lg shadow-card cursor-pointer">
    {/* 카페 이미지 */}
    <div className="w-36 h-36 rounded-lg overflow-hidden">
      {img ? (
        <Image
          src={img}
          alt={`${name} 카페 사진`}
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full bg-Grey-300" />
      )}
    </div>

    {/* 카페 정보 */}
    <div className="space-y-1.5 text-center">
      <div className="Body_1_bold line-clamp-1 px-2">{name}</div>
      <div className="Body_2_med line-clamp-2">{location}</div>
    </div>
  </article>
);

export default NewCard;
