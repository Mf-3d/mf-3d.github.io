import type { Metadata } from "next";

import Maintenance from "@/components/common/maintenance";

export const metadata: Metadata = {
  title: "[404]: Not Found | mf7cli's Website"
}

export default function Page() {
  return (
    <main>
      <div className="flex justify-center">
        <Maintenance />
      </div>
      <div className="flex justify-center">
        <h1>404</h1>
      </div>
      <div className="flex justify-center text-center">
        <p>
          お探しのページは見つかりませんでした。<br/>
          ページは存在しないか、削除されたか、移動された可能性があります。
        </p>
      </div>
    </main>
  );
}