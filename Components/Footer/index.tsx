"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

export default function Header(props: any) {
  const router = useRouter();

  return (
    <>
      <footer className="mt-8 flex w-full flex-col items-center justify-center bg-[#151b28] py-5 text-base text-white  md:mt-10 md:py-8">
        <div className="">Copyright © 神骅供应链科技（上海）有限公司 2023</div>
        <div className="mt-1 text-base">沪ICP备 2021011391号</div>
      </footer>
    </>
  );
}
