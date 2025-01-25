import Image from "next/image";
import Link from "next/link";
import { RecommendCafe } from "src/types/home";

const RecommendCard = ({
  cafe_id,
  image_url,
  name,
  address,
  subscription_price,
}: RecommendCafe) => (
  <article className="space-y-3 p-3 rounded-lg shadow-card">
    {/* 카페 이미지 */}
    <section className="w-48 h-32 relative rounded-lg shrink-0 overflow-hidden">
      {image_url ? (
        <Image
          src={image_url}
          alt={`${name} 카페 사진`}
          fill
          sizes="12rem"
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full bg-Grey-300" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.59)_100%)]" />
      <h5 className="absolute bottom-3 left-3 Subhead_1_bold  text-white truncate w-[85%]">
        {name}
      </h5>
    </section>

    {/* 카페 정보 */}
    <div className="flex gap-3">
      <p className="Body_2_bold w-7 shrink-0">주소</p>
      <p className="Body_2_med line-clamp-2">{address}</p>
    </div>
    <div className="flex gap-3">
      <p className="Body_2_bold w-7 shrink-0">가격</p>
      <p className="Body_2_med">₩{subscription_price.toLocaleString()} 부터</p>
    </div>

    {/* 버튼 */}
    <Link
      href={`/search?id=${cafe_id}`}
      className="Body_2_bold text-white bg-Grey-800 rounded-lg h-10 grid place-items-center"
    >
      자세히 보기
    </Link>
  </article>
);

export default RecommendCard;
