import { ThemeSwitch } from "@/components/common/themeSwitch"

export default function Page() {
  return (
    <main>
      <div className="mt-4 h-10">
        <ThemeSwitch />
      </div>
      <div className="flex justify-center m-10">
        <h1>メンテナンス中</h1>
      </div>
    </main>
  );
}