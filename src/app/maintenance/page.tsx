import Maintenance from "@/components/common/maintenance";

export default function Page() {
  return (
    <main>
      <div className="flex justify-center">
        <Maintenance />
      </div>
      <div className="flex justify-center">
        <h1>メンテナンス中</h1>
      </div>
      <div className="flex justify-center">
        <p>
          終了までしばらくお待ちください。
        </p>
      </div>
    </main>
  );
}