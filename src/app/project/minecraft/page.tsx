import type { Metadata } from "next";

const Visuals: string[] = [
  "/images/projects/minecraft/visual-001.png",
  "/images/projects/minecraft/visual-002.png",
  "/images/projects/minecraft/visual-003.png",
  "/images/projects/minecraft/visual-004.png",
];

export const metadata: Metadata = {
  title: "Minecraft Server | mf7cli's Website"
}

export default function Page() {
  const random: number = Math.floor(Math.random() * Visuals.length);

  return (
    <main>
      <div className="flex flex-col justify-center mb-9 p-9 bg-cover bg-center rounded-lg h-[30vh] text-slate-100" style={{
        backgroundImage: `url(${Visuals[random]})`
      }}>
        <div className="m-9 text-center">
          <h1>mf7cli's Minecraft Server 2024</h1>
          <p className="block">
            JE: 1.21.4・BE: 1.21.60
          </p>
        </div>
      </div>
      <div className="flex justify-start h-[25vh] text-slate-100">
        <div className="mx-2 mb-9 p-9 bg-cover bg-center rounded-lg grow" style={{
          backgroundColor: "#304024"
        }}>
          <h2>🖼️ Gallery</h2>
          🚧 準備中...
        </div>
        <div className="mx-2 mb-9 p-9 bg-cover bg-center rounded-lg grow" style={{
          backgroundColor: "#262521"
        }}>
          <h2>🗺️ Map</h2>
          🚧 準備中...
        </div>
      </div>
    </main>
  );
}