import Image from "next/image";
import Link from "next/link";
import { NewCafe } from "src/types/home";

const NewCard = ({ cafe_id, image_url, name, address }: NewCafe) => (
  <Link
    className="space-y-3 p-3 rounded-lg shadow-card cursor-pointer"
    href={`/search?id=${cafe_id}`}
  >
    {/* 카페 이미지 */}
    <div className="w-36 h-36 relative rounded-lg overflow-hidden">
      {image_url ? (
        <Image
          src={image_url}
          alt={`${name} 카페 사진`}
          fill
          sizes="9rem"
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full bg-Grey-300" />
      )}
    </div>

    {/* 카페 정보 */}
    <div className="space-y-1.5 text-center">
      <div className="Body_1_bold line-clamp-1 px-2">{name}</div>
      <div
        className="Body_2_med 
      line-clamp-2 break-keep"
      >
        {address}
      </div>
    </div>
  </Link>
);

export default NewCard;
