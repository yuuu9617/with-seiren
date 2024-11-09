import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-[5rem]">
            <Link href="/weight-loss-commitment/create">
              <button className="rounded-full bg-fuchsia-300 py-3 hover:scale-105 hover:bg-fuchsia-400">
                ダイエット成功のための
                <span className="text-[hsl(280,100%,70%)] hover:text-red-500">
                  契約を結ぶ
                </span>
              </button>
            </Link>
          </h1>
        </div>
      </main>
    </HydrateClient>
  );
}
