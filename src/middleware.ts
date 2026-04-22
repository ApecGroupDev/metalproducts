import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const goneUrls = [
  "/sample-page",
  "/home",
  "/hello-world",
  "/category/uncategorized",
  "/feed",
  "/privacy",
  "/about-us",
  "/terms",
  "/contact-us",
  "/above-ground-tank",
];

const goneHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>410 Gone | Metal Products USA</title>
  <meta name="robots" content="noindex" />
  <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    :root {
      --red: #dc2626;
      --red-dark: #b91c1c;
      --ink: #111827;
      --ink-soft: #1f2937;
      --muted: #4b5563;
      --bg: #efefef;
    }
    body {
      font-family: 'Raleway', system-ui, -apple-system, 'Segoe UI', sans-serif;
      background: var(--bg);
      color: var(--ink-soft);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 6rem 1.5rem;
      position: relative;
      overflow: hidden;
    }
    /* Decorative layers */
    body::before, body::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }
    body::before {
      background:
        radial-gradient(circle at 20% 20%, rgba(220,38,38,0.12), transparent 55%),
        radial-gradient(circle at 80% 80%, rgba(17,24,39,0.12), transparent 55%);
      opacity: 0.9;
    }
    body::after {
      background-image:
        linear-gradient(to right, #111 1px, transparent 1px),
        linear-gradient(to bottom, #111 1px, transparent 1px);
      background-size: 56px 56px;
      opacity: 0.07;
    }
    .wrap {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 64rem;
    }
    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.375rem 1rem;
      border: 1px solid rgba(220,38,38,0.3);
      background: rgba(255,255,255,0.6);
      backdrop-filter: blur(6px);
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--red);
    }
    .eyebrow .dot {
      width: 0.375rem;
      height: 0.375rem;
      border-radius: 9999px;
      background: var(--red);
    }
    .code {
      font-family: 'Oswald', 'Raleway', sans-serif;
      display: block;
      margin-top: 2rem;
      font-weight: 700;
      line-height: 1;
      padding: 0.08em 0;
      letter-spacing: -0.02em;
      font-size: clamp(7rem, 24vw, 20rem);
      background: linear-gradient(180deg, #111827 0%, #1f2937 55%, #6b7280 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      user-select: none;
    }
    .divider {
      margin: 1rem auto 0;
      height: 4px;
      width: 6rem;
      border-radius: 9999px;
      background: var(--red);
    }
    .title {
      font-family: 'Oswald', 'Raleway', sans-serif;
      display: block;
      margin-top: 2rem;
      color: var(--ink);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      font-size: clamp(1.75rem, 4.5vw, 3.5rem);
    }
    .msg {
      display: block;
      margin: 1.25rem auto 0;
      max-width: 42rem;
      color: var(--muted);
      font-size: clamp(1rem, 1.4vw, 1.25rem);
      line-height: 1.6;
    }
    .actions {
      margin-top: 2.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.85rem 1.75rem;
      border-radius: 9999px;
      font-size: 0.8125rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }
    .btn-primary {
      background: var(--red);
      color: #fff;
      box-shadow: 0 10px 20px -8px rgba(220,38,38,0.4);
    }
    .btn-primary:hover {
      background: var(--red-dark);
      box-shadow: 0 14px 28px -8px rgba(220,38,38,0.5);
    }
    .btn-secondary {
      color: var(--ink);
      border-color: var(--ink);
      background: transparent;
    }
    .btn-secondary:hover {
      background: var(--ink);
      color: #fff;
    }
    .btn .icon { width: 1rem; height: 1rem; }
    .btn-secondary:hover .arrow { transform: translateX(4px); }
    .arrow { transition: transform 0.3s ease; }
  </style>
</head>
<body>
  <main class="wrap">
    <span class="eyebrow"><span class="dot"></span>Error 410</span>
    <span class="code">410</span>
    <div class="divider"></div>
    <span class="title">This page is gone</span>
    <span class="msg">This page has been permanently removed and will not return. Head back to the homepage or explore our line of industrial tanks.</span>
    <div class="actions">
      <a class="btn btn-primary" href="/">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Return Home
      </a>
      <a class="btn btn-secondary" href="/above-ground-tanks">
        Browse Tanks
        <svg class="icon arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </div>
  </main>
</body>
</html>`;

export function middleware(request: NextRequest) {
  if (goneUrls.includes(request.nextUrl.pathname)) {
    return new NextResponse(goneHtml, {
      status: 410,
      headers: { "Content-Type": "text/html" },
    });
  }
  return NextResponse.next();
}

// NOTE: `matcher` must be a static literal so Next.js can analyze it at build time.
// Keep this list in sync with `goneUrls` above.
export const config = {
  matcher: [
    "/sample-page",
    "/home",
    "/hello-world",
    "/category/uncategorized",
    "/feed",
    "/privacy",
    "/about-us",
    "/terms",
    "/contact-us",
    "/above-ground-tank",
  ],
};
