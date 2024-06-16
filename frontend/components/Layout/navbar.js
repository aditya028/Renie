"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="w-[100%] fixed ">
      <div className="bg-[#141022] flex flex-wrap gap-3  items-center text-white mx-10 my-5 rounded-[2.5rem] px-8 py-1 justify-between">
        <h1 className="text-[40px] font-bold text-[rgb(191,33,113)]">Renie</h1>
        <div className="text-[20px] flex gap-5 ">
          <Link href="/">
            <span
              className={`hover:cursor-pointer hover:font-semibold ${
                pathname == "/" ? "border-b-2" : ""
              }`}
            >
              Overview
            </span>
          </Link>
          <Link href="/bin">
            <span
              className={`hover:cursor-pointer hover:font-semibold ${
                pathname == "/bin" ? "border-b-2" : ""
              }  `}
            >
              Renie bin
            </span>
          </Link>
        </div>
        <div>
          <Button variant="secondary">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
