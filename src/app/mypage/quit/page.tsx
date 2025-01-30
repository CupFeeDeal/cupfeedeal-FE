import { redirect } from "next/navigation";

export default function Quit() {
  redirect("/mypage");
  return null;
}
