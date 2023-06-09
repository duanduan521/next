"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import styles from "./index.module.scss"

export default function Header(props: any) {
  const router = useRouter()
  const [toggle, setToggle] = useState(false)
  console.log("[ props ] >", props)
  const list = [
    { id: 1, url: "/", title: "首页" },
    { id: 4, url: "/about", title: "关于我们" },
    { id: 2, url: "/news", title: "新闻中心" },
    { id: 3, url: "/contact", title: "联系我们" },
  ]
  return (
    <>
      <header className='box-border flex h-10 w-full items-center  justify-between px-5 sm:hidden'>
        <div>Logo</div>
        <div onClick={() => setToggle(!toggle)}>123</div>
      </header>

      {toggle && (
        <ul className={styles.navList}>
          {list.map((item) => {
            return (
              <li
                className={
                  props.url === item.url
                    ? "h-10 w-full bg-gray-400 text-center leading-10 text-white"
                    : "h-10 w-full text-center leading-10"
                }
                key={item.id}
                onClick={() => router.push(item.url)}>
                {item.title}
              </li>
            )
          })}
        </ul>
      )}

      <div className='h-full w-full'>
        <Image
          src='/banner.png'
          alt='Vercel Logo'
          className='h-auto w-full dark:invert'
          width={1000}
          height={1000}
          // sizes="100vw,(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
          // priority
        />
      </div>
    </>
  )
}
