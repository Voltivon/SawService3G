import Link from "next/link";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <main className="grid min-h-[80vh] place-items-center px-6 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="h-display mt-3 text-4xl text-white sm:text-5xl">
          That page is offline.
        </h1>
        <p className="mt-4 text-ink-300">
          But our saws aren&rsquo;t. Head{" "}
          <Link href="/" className="text-spark-400 underline underline-offset-4">
            home
          </Link>{" "}
          or call us at{" "}
          <a href={site.phone.href} className="text-white">
            {site.phone.display}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
