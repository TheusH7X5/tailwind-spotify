import { Footer } from "@/components/Footer";
import { SideBar } from "@/components/SideBar";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize,
  Maximize2,
} from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar/>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-2xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={92}
                height={92}
                alt="Capa do album Beerbongs & Bentleys do Post Malone"
              />
              <strong className="text-sm ">Beerbongs & Bentleys</strong>
              <button className="w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
                <Play height="18" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={92}
                height={92}
                alt="Capa do album Beerbongs & Bentleys do Post Malone"
              />
              <strong className="text-sm ">Beerbongs & Bentleys</strong>
              <button className="w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
                <Play height="18" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={92}
                height={92}
                alt="Capa do album Beerbongs & Bentleys do Post Malone"
              />
              <strong className="text-sm ">Beerbongs & Bentleys</strong>
              <button className="w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
                <Play height="18" />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-1xl mt-6">
            Made for Matheus Borges
          </h2>

          <div className="grid grid-cols-7 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={86}
                height={86}
                alt="Capa do album Beerbongs & Bentleys do Post Malone"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Post Malone, Wallows and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
