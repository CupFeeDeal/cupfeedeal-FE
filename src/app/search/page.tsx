import TopBar from "@common/TopBar";
import Map from "./_components/Map";

export default function Search() {
  return (
    <div className="flex w-full flex-col">
      <TopBar title="커피딜 지도" />
      <Map />
    </div>
  );
}
