import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-[#efefef] min-h-[85vh] flex items-center justify-center px-6 py-24">
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(220,38,38,0.12), transparent 55%), radial-gradient(circle at 80% 80%, rgba(17,24,39,0.12), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative w-full max-w-5xl text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-600 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
          Error 404
        </div>

        {/* Big code */}
        <h1 className="font-display mt-8 select-none font-bold leading-none tracking-tight text-gray-900 text-[clamp(7rem,24vw,20rem)] py-[0.08em]">
          <span className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-500 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Red divider */}
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-600" />

        {/* Headline */}
        <h2 className="font-display mt-8 font-semibold uppercase tracking-wide text-gray-900 text-[clamp(1.75rem,4.5vw,3.5rem)]">
          This page can&apos;t be found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-gray-600 text-[clamp(1rem,1.4vw,1.25rem)] leading-relaxed">
          The link may be broken, or the page may have been moved. Head back to
          the homepage or explore our line of industrial tanks.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
          >
            <Home className="h-4 w-4" />
            Return Home
          </Link>
          <Link
            href="/above-ground-tanks"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-transparent px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            Browse Tanks
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
