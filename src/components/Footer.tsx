import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-3 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          className="w-full"
          src="/album.jpg"
          width={34}
          height={34}
          alt="Capa do album Beerbongs & Bentleys do Post Malone"
        />
        <div className="flex flex-col gap-2">
          <strong className="font-normal">Rockstar</strong>
          <span className="text-xs text-zinc-500 w-20">Post Malone</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4">
          <Shuffle size={16} className="text-zinc-200" />
          <SkipBack size={16} className="text-zinc-200" />

          <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play height="18" />
          </button>

          <SkipForward size={16} className="text-zinc-200" />
          <Repeat size={16} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Mic2 size={16} />
        <LayoutList size={16} />
        <Laptop2 size={16} />
        <div className="flex items-center gap-2">
          <Volume size={16} />
          <div className="h-1 rounded-full w-14 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={16} />
      </div>
    </footer>
  );
}
