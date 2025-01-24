import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-4 sm:p-16 tracking-widest">
      <div className="h-10 w-10 text-base"> Oindrila_</div>

      {/* Main Content */}
      <div className="grid grid-cols-1 custom:grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Text Div */}
        <div className="w-full sm:w-1/2 md:w-1/3 h-auto sm:h-72 md:h-80 flex flex-col justify-center items-start space-y-4">
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl pb-24">OINDRILA__</p>
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl pb-24">__BANERJEE</p>
        </div>

        {/* Image Div */}
        <div className="w-80 h-80 bg-white rounded-full overflow-hidden flex justify-center items-center lg:ml-96 image-container">
          <Image src="/asset/mee.png" alt="profile" width={400} height={400} className="object-cover" />
        </div>
      </div>
    </div>
  );
}
