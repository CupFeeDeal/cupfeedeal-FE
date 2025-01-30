import { redirect } from "next/navigation";

export default function Nickname() {
  redirect("/mypage");
  return null;
}
