import Image from "next/image";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Map, APILoader } from "@uiw/react-amap";
// import { useMapContext, Provider } from '@uiw/react-amap';

export default function Contact() {
  return (
    <main className="w-screen">
      <Header url={"/contact"}></Header>
      <div className="mt-8 flex w-full flex-col items-center justify-center text-2xl md:mt-10  md:text-3xl">
        <div className="">联系我们</div>
        <div className="mt-1 text-base text-stone-500">Contact Us</div>
      </div>
      {/* 地图 */}
      {/* <APILoader akey="2bc7200b21b54648cd9640b7f158f12b">
        <Map />
      </APILoader> */}
      <Footer></Footer>
    </main>
  );
}
