import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-04 sm:p-16 tracking-widest">
      <div className="h-10 w-10 text-base"> Oindrila_
      </div>
      <div className="bw-full sm:w-1/2 md:w-1/3 h-64 sm:h-72 md:h-80 items-center sm:justify-center">
            <p className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl pb-24 "> OINDRILA__</p>
            <p className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl pb-24 "> __BANERJEE</p>
      </div>
    </div>
  );
}
