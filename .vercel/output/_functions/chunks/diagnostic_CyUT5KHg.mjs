import { c as createComponent } from './astro-component_wDgmiRJy.mjs';
import 'piccolore';
import { l as createRenderInstruction, m as maybeRenderHead, h as addAttribute, r as renderTemplate, n as renderComponent, o as renderSlot, p as renderHead, u as unescapeHTML } from './entrypoint_BGXdfUd4.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Nav;
  const currentPath = Astro2.url.pathname;
  const links = [
    { href: "/about", label: "About" },
    { href: "/tools-apps", label: "Tools & Apps" },
    { href: "/testimonials", label: "Results" },
    { href: "/blog", label: "Field Notes" },
    { href: "/contact", label: "Contact" }
  ];
  const investorLinks = [
    { href: "/investors", label: "Private Equity" },
    { href: "/venture", label: "Venture" }
  ];
  const onInvestor = investorLinks.some(({ href }) => currentPath.startsWith(href));
  return renderTemplate`${maybeRenderHead()}<header id="site-nav" class="fixed top-0 left-0 right-0 z-50 bg-parchment/95 backdrop-blur-sm transition-shadow duration-300"> <nav class="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4"> <a href="/" class="flex-shrink-0 font-display text-[22px] text-ink no-underline">
Growth Map<span class="text-moss">.</span> </a> <!-- Desktop links --> <ul class="hidden items-center gap-7 md:flex"> ${links.slice(0, 3).map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")}${addAttribute([
    "text-sm font-medium transition-colors hover:text-ink",
    currentPath === href || href !== "/" && currentPath.startsWith(href) ? "text-moss" : "text-fern"
  ], "class:list")}> ${label} </a> </li>`)} <!-- For Investors dropdown --> <li class="group relative"> <button type="button"${addAttribute([
    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-ink",
    onInvestor ? "text-moss" : "text-fern"
  ], "class:list")} aria-haspopup="true" aria-expanded="false">
For Investors
<svg class="h-3 w-3 transition-transform group-hover:rotate-180" viewBox="0 0 12 12" fill="none" aria-hidden="true"> <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> <ul class="invisible absolute left-1/2 top-full z-50 mt-2 min-w-[168px] -translate-x-1/2 rounded-[12px] border border-hairline bg-parchment/98 p-1.5 opacity-0 shadow-md backdrop-blur-sm transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"> ${investorLinks.map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")}${addAttribute([
    "block rounded-[8px] px-3 py-2 text-sm font-medium transition-colors hover:bg-parchment-deep hover:text-ink",
    currentPath.startsWith(href) ? "text-moss" : "text-fern"
  ], "class:list")}> ${label} </a> </li>`)} </ul> </li> ${links.slice(3).map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")}${addAttribute([
    "text-sm font-medium transition-colors hover:text-ink",
    currentPath === href || href !== "/" && currentPath.startsWith(href) ? "text-moss" : "text-fern"
  ], "class:list")}> ${label} </a> </li>`)} <li> <a href="https://calendar.notion.so/meet/cameronearloliver/qc3y04oud" target="_blank" rel="noopener noreferrer" class="inline-block rounded-full border border-ink px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-parchment">
Book a call
</a> </li> </ul> <!-- Mobile hamburger --> <button id="mobile-menu-btn" class="flex flex-col gap-1.5 md:hidden" aria-label="Toggle menu" aria-expanded="false"> <span class="block h-0.5 w-6 bg-ink transition-all duration-300" id="bar1"></span> <span class="block h-0.5 w-6 bg-ink transition-all duration-300" id="bar2"></span> <span class="block h-0.5 w-6 bg-ink transition-all duration-300" id="bar3"></span> </button> </nav> <!-- Mobile menu --> <div id="mobile-menu" class="hidden border-t border-hairline md:hidden"> <ul class="flex flex-col gap-4 px-6 py-6"> ${links.slice(0, 3).map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")}${addAttribute([
    "block text-base font-semibold transition-colors hover:text-moss",
    currentPath === href || href !== "/" && currentPath.startsWith(href) ? "text-moss" : "text-ink"
  ], "class:list")}> ${label} </a> </li>`)} <li> <p class="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-fern">For Investors</p> <ul class="mt-3 flex flex-col gap-3 pl-3"> ${investorLinks.map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")}${addAttribute([
    "block text-base font-semibold transition-colors hover:text-moss",
    currentPath.startsWith(href) ? "text-moss" : "text-ink"
  ], "class:list")}> ${label} </a> </li>`)} </ul> </li> ${links.slice(3).map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")}${addAttribute([
    "block text-base font-semibold transition-colors hover:text-moss",
    currentPath === href || href !== "/" && currentPath.startsWith(href) ? "text-moss" : "text-ink"
  ], "class:list")}> ${label} </a> </li>`)} <li> <a href="https://calendar.notion.so/meet/cameronearloliver/qc3y04oud" target="_blank" rel="noopener noreferrer" class="inline-block rounded-full border border-ink px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-parchment">
Book a call
</a> </li> </ul> </div> </header> <!-- Spacer for fixed nav --> <div class="h-[72px]"></div> ${renderScript($$result, "/Users/cameronearloliver/Documents/cameron-os/growth-map/website/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/cameronearloliver/Documents/cameron-os/growth-map/website/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`<!-- Sitewide closer: dark olive, document grammar -->${maybeRenderHead()}<section class="bg-ink px-6 py-20 text-center md:py-24"> <div class="mx-auto max-w-[700px]"> <p class="doc-label inline-block !border-cream/20 px-4 text-cream/70"> <b class="!text-[#AFC581]">→</b>NEXT STEP
</p> <h2 class="font-display mt-6 text-3xl leading-tight text-cream md:text-[40px]">
Find where <em class="!text-[#AFC581]">you're</em> stuck.
</h2> <p class="mx-auto mt-5 max-w-[52ch] text-lg leading-relaxed text-cream/75">
A free 30-minute call. We'll map where your business is and whether I can help. If I can't, I'll tell you.
</p> <div class="mt-9 flex flex-wrap justify-center gap-4"> <a href="https://calendar.notion.so/meet/cameronearloliver/qc3y04oud" target="_blank" rel="noopener noreferrer" class="inline-block rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-ink transition-opacity hover:opacity-90">
Book a call
</a> </div> </div> </section> <footer class="border-t border-cream/15 bg-ink px-6 py-8 text-cream/60"> <div class="mx-auto flex max-w-[1200px] flex-col items-center gap-5 md:flex-row md:justify-between"> <a href="/" class="font-display text-lg text-cream/85 no-underline">
Growth Map<span class="text-[#AFC581]">.</span> </a> <nav class="flex flex-wrap justify-center gap-6"> <a href="/" class="text-sm transition-colors hover:text-cream">Home</a> <a href="/about" class="text-sm transition-colors hover:text-cream">About</a> <a href="/tools-apps" class="text-sm transition-colors hover:text-cream">Tools &amp; Apps</a> <a href="/testimonials" class="text-sm transition-colors hover:text-cream">Results</a> <a href="/investors" class="text-sm transition-colors hover:text-cream">For Private Equity</a> <a href="/venture" class="text-sm transition-colors hover:text-cream">For Venture</a> <a href="/blog" class="text-sm transition-colors hover:text-cream">Field Notes</a> <a href="/diagnostic" class="text-sm transition-colors hover:text-cream">Diagnostic</a> <a href="/contact" class="text-sm transition-colors hover:text-cream">Contact</a> </nav> <div class="flex items-center gap-4"> <a href="https://www.linkedin.com/in/cameronearloliver/" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-cream" aria-label="LinkedIn"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg> </a> <p class="text-sm">
&copy; ${year} Growth Map. All rights reserved.
</p> </div> </div> </footer>`;
}, "/Users/cameronearloliver/Documents/cameron-os/growth-map/website/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, canonicalPath = "" } = Astro2.props;
  const canonicalURL = `https://www.growthmap.consulting${canonicalPath}`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#F5F0E1"><!-- SEO --><title>', '</title><meta name="description"', '><link rel="canonical"', '><meta name="google-site-verification" content="BLM4lUcRvX22J7pRpSYaxPEuW1qN3DYcxP83hReQkO4"><!-- Open Graph / LinkedIn --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content="https://www.growthmap.consulting/images/og-image.png"><meta property="og:url"', '><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet"><!-- Structured Data --><script type="application/ld+json">', '<\/script><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-FCS68414CY"><\/script>', "", '</head> <body class="bg-parchment antialiased"> ', " <main> ", " </main> ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Growth Map",
    "description": "Fractional COO for founders and owner-operators at $1M–$20M. Growth Map gets in the trenches with owner-led businesses, finds what's actually holding growth back, and fixes it: one map, one scorecard, a weekly rhythm.",
    "url": "https://www.growthmap.consulting",
    "logo": "https://www.growthmap.consulting/images/logo.png",
    "image": "https://www.growthmap.consulting/images/og-image.png",
    "founder": {
      "@type": "Person",
      "name": "Cameron Oliver",
      "jobTitle": "Fractional COO",
      "url": "https://www.growthmap.consulting/about",
      "sameAs": ["https://www.linkedin.com/in/cameronearloliver/"]
    },
    "serviceType": ["Fractional COO", "Business Operations Consulting", "Growth Strategy", "Business Diagnostics"],
    "areaServed": "US",
    "sameAs": ["https://www.linkedin.com/in/cameronearloliver/"]
  })), renderScript($$result, "/Users/cameronearloliver/Documents/cameron-os/growth-map/website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Nav", $$Nav, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/cameronearloliver/Documents/cameron-os/growth-map/website/src/layouts/Layout.astro", void 0);

const $$Diagnostic = createComponent(async ($$result, $$props, $$slots) => {
  const record = [
    { before: "$12M", after: "$20M", label: "Construction revenue, on a rebuilt sales process" },
    { before: "120", after: "45 days", label: "Onboarding time, unlocking $250K in new revenue" },
    { before: "40%", after: "85%", label: "Utilization on underused contracts" },
    { before: "50%", after: "65%", label: "Provider utilization, on smarter scheduling" }
  ];
  const stations = [
    "Do enough of the right people know you exist?",
    "Are you winning good-fit customers, or taking whatever comes in?",
    "Do you close a healthy share of the leads you chase?",
    "Do new customers get off to a smooth start?",
    "Does the work get done well when you step away?",
    "Do customers stick around and send you more?"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "What's the one thing holding your business back? | Growth Map", "description": "A free operating diagnostic for owner-led businesses. Answer a few honest questions and get the one thing to fix first, read the way Cameron would on a call.", "canonicalPath": "/diagnostic" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 pt-14 pb-4 md:pt-20"> <div id="diagnostic" class="mx-auto max-w-[760px]"> <h1>What's the one thing holding your business back?</h1> <p class="sub">Answer a few honest questions and I'll run your business through the same read I'd do on a call. You'll get the one thing to fix first, and why. Takes about two minutes.</p> <!-- FORM --> <div id="form"> <div class="field"> <label for="business">What does your business do?</label> <input id="business" type="text" maxlength="200" placeholder="e.g. commercial electrical contractor"> </div> <div class="row"> <div class="field"> <label for="revenue">Revenue</label> <select id="revenue"> <option value="">Pick one</option> <option>Under $1M</option> <option>$1M–$3M</option> <option>$3M–$10M</option> <option>$10M–$20M</option> <option>$20M+</option> </select> </div> <div class="field"> <label for="team">Team size</label> <select id="team"> <option value="">Pick one</option> <option>1–10</option> <option>11–25</option> <option>26–50</option> <option>51–100</option> <option>100+</option> </select> </div> </div> <p class="qlabel">Rate each honestly</p> <div id="stations"> ${stations.map((q, i) => renderTemplate`<div class="q"${addAttribute(i, "data-idx")}> <span class="qnum">0${i + 1}</span> <span class="qtext">${q}</span> <span class="opts"> <button type="button" data-v="g">Solid</button> <button type="button" data-v="y">Shaky</button> <button type="button" data-v="r">Broken</button> </span> </div>`)} </div> <div class="field"> <label for="frustration">What's the most frustrating part of running it right now?</label> <textarea id="frustration" rows="3" maxlength="600" placeholder="A sentence or two, in your own words."></textarea> </div> <div class="field"> <label for="email">Where should I send your read?</label> <input id="email" type="email" placeholder="you@company.com"> </div> <div class="ctarow"> <button id="run" disabled>Show me the one thing</button> <p id="progress">Answer the six above to run it</p> </div> </div> <!-- LOADING --> <div id="loading" hidden> <p class="rlabel">Reading your business</p> <p class="loadingline">Running it through the map. One second.</p> </div> <!-- RESULT --> <div id="result" hidden></div> </div> </section>  <section class="border-t border-hairline bg-parchment-deep px-6 py-14 md:py-16"> <div class="mx-auto max-w-[900px]"> <p class="doc-label text-ink">Who's asking</p> <p class="mt-5 max-w-[62ch] text-lg leading-relaxed text-fern">
I'm Cameron Oliver. I get in the trenches with owner-led businesses and fix what's actually holding them back. A few of the numbers I've helped move:
</p> <div class="mt-9 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4"> ${record.map((r) => renderTemplate`<div> <p class="font-display text-xl leading-none text-ink md:text-[26px]"> ${r.before} <span class="text-moss">&rarr;</span> ${r.after} </p> <p class="mt-2 max-w-[26ch] text-[12.5px] leading-snug text-fern">${r.label}</p> </div>`)} </div> <a href="/testimonials" class="mt-9 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-moss transition-colors hover:text-ink">See the results &rarr;</a> </div> </section> ` })}  ${renderScript($$result, "/Users/cameronearloliver/Documents/cameron-os/growth-map/website/src/pages/diagnostic.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/cameronearloliver/Documents/cameron-os/growth-map/website/src/pages/diagnostic.astro", void 0);

const $$file = "/Users/cameronearloliver/Documents/cameron-os/growth-map/website/src/pages/diagnostic.astro";
const $$url = "/diagnostic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Diagnostic,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
