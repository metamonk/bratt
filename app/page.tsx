import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2 max-w-[500px] mx-auto">
        <h1 className="text-2xl font-bold">Bratt Utilities</h1>
        {/* <p className="text-sm text-gray-500">Be Bratt</p> */}
        <div className="flex flex-col gap-2">
          <Link href="/pilled">
            <Button>Bratt Pilled 🟩</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
