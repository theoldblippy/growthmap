const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://www.growthmap.consulting", "SSR": true};
const prerender = false;
const STATIONS = [
  { label: "Get noticed", short: "getting found", engine: "get" },
  { label: "Qualify", short: "who you go after", engine: "get" },
  { label: "Win the work", short: "closing the work", engine: "get" },
  { label: "Get started", short: "the start", engine: "serve" },
  { label: "Do the work", short: "how the work gets done", engine: "serve" },
  { label: "Keep them", short: "keeping customers", engine: "serve" }
];
const BASE = {
  0: {
    verdict: "The line runs fine once people find you. The problem is not enough of the right ones do.",
    read: "Everything downstream is starved for leads, so it can feel like a sales or delivery problem when it's really a visibility problem. More effort inside the business won't fix a top that's too narrow.",
    fixes: [
      { move: "Get sharp on exactly who you're for.", why: "A message built for 'anyone' reaches no one, and that's why the right leads aren't showing up." },
      { move: "Show up where those people already are, consistently.", why: "Sporadic, everywhere-at-once marketing is why awareness never compounds." },
      { move: "Make one clear promise on the first thing they see.", why: "If a stranger can't tell what you do in five seconds, they leave before they ever become a lead." }
    ]
  },
  1: {
    verdict: "You're winning customers, just not the right ones.",
    read: "Time and money are going into people who were never going to buy, or ones who become a headache once they do. That drags every number after it: close rate, margin, and your sanity.",
    fixes: [
      { move: "Define what a good-fit customer actually looks like.", why: "Without it, everyone chases everything, and the wrong ones eat the most time." },
      { move: "Add one qualifying question early in the process.", why: "Right now you find out someone's a bad fit after you've sunk hours into them." },
      { move: "Get comfortable saying no.", why: "Every bad-fit yes is a good-fit customer you didn't have room for." }
    ]
  },
  2: {
    verdict: "You get in front of people, but too many walk.",
    read: "It's rarely the product. It's usually the offer, the follow-up, or a sales process that quietly drops people between 'interested' and 'signed'.",
    fixes: [
      { move: "Write down your actual sales steps, start to close.", why: "You can't fix a process you can't see, and right now it lives in your head." },
      { move: "Fix the follow-up.", why: "Most deals are lost in the gaps between conversations, not in the pitch." },
      { move: "Make the offer a clear yes or no, not a maybe.", why: "Fuzzy proposals stall, and stalled deals quietly die." }
    ]
  },
  3: {
    verdict: "You win them, then the start is rocky.",
    read: "The handoff from 'sold' to 'started' is where it breaks. A bad kickoff becomes a hard job, a blown timeline, and a customer who was set up to be unhappy before you began.",
    fixes: [
      { move: "Build one repeatable kickoff, the same every time.", why: "Every job starting from scratch is why timelines slip from day one." },
      { move: "Name one owner for the won-to-started handoff.", why: "When nobody owns it, things fall through the cracks between sales and delivery." },
      { move: "Set expectations in writing before work starts.", why: "Most delivery friction is really a conversation about expectations that never happened." }
    ]
  },
  4: {
    verdict: "This isn't a sales problem. It's that the work still runs through you.",
    read: "Delivery wobbles the second you step away, so you can't step away. Adding more sales right now just pours more into a line that's already backing up.",
    fixes: [
      { move: "Get the work out of your head and onto one board.", why: "Right now nothing moves without you, which makes you the bottleneck on every job." },
      { move: "Put one number on each stage and check it weekly.", why: "You can't see which jobs are slipping until they've already slipped and eaten the margin." },
      { move: "Let someone own a piece end to end.", why: "Until someone can run it without you, you don't have a business, you have a job." }
    ]
  },
  5: {
    verdict: "You fight to win customers, then lose them out the back.",
    read: "Keeping the ones you have is the cheapest growth there is, and right now it's leaking. So you're running harder on the front end just to stay flat.",
    fixes: [
      { move: "Build a simple rhythm for checking in after the sale.", why: "Customers rarely leave loud. They drift, and nobody's watching for it." },
      { move: "Ask your best customers why they stay.", why: "You're guessing at what keeps them, so you can't do more of it on purpose." },
      { move: "Make repeat and referral an actual step, not an accident.", why: "The cheapest deal you'll ever get is the one you already earned, if you ask for it." }
    ]
  }
};
const ALL_GREEN = {
  verdict: "Nothing's obviously broken, which is rare.",
  read: "When nothing's clearly leaking, the job isn't fixing a break. It's protecting what works as you grow and spotting the next ceiling before it finds you.",
  fixes: [
    { move: "Put your numbers on one page and check them weekly.", why: "The businesses that stay clean are the ones that never stop watching the gauges." },
    { move: "Write down how it runs, while it's running well.", why: "The knowledge in your head is the thing that breaks first when you grow or hire." },
    { move: "Find your next constraint before it finds you.", why: "Something is always about to become the bottleneck. Better to pick it than have it picked for you." }
  ]
};
function pickConstraint(ratings) {
  let i = ratings.findIndex((r) => r === "r");
  if (i < 0) i = ratings.findIndex((r) => r === "y");
  return i;
}
async function personalize(base, ctx, apiKey) {
  const system = `You are the writing engine behind Cameron Oliver's "Operating Diagnostic" for Growth Map. Cameron is a fractional operator who helps owner-led businesses ($1M-$20M) fix what's actually holding growth back.

Your job: take a BASE diagnosis (already correct about WHICH station is the constraint) and rewrite it so it speaks directly to THIS owner's business and their own words. Do not change which station is the constraint. Do not invent specific numbers or facts they didn't give you.

Voice rules (Cameron's, strict): plain, warm, blunt, like one operator talking to another across a table. Short sentences. No consultant-speak. No em dashes. No "not X but Y" snaps. No rule-of-three cadence. No hype. If their inputs are thin, stay a little general rather than making things up.

Return ONLY valid JSON, no markdown, in exactly this shape:
{"verdict":"one blunt sentence","read":"2-3 sentences naming the real problem behind the symptom","fixes":[{"move":"short imperative","why":"why it's costing them, one sentence"},{"move":"...","why":"..."},{"move":"...","why":"..."}]}`;
  const user = `THE OWNER
Business: ${ctx.business || "not given"}
Revenue: ${ctx.revenue || "not given"}
Team size: ${ctx.team || "not given"}
Their most frustrating part right now: ${ctx.frustration || "not given"}
What breaks if they disappear for two weeks: ${ctx.vacation || "not given"}

THE CONSTRAINT (do not change): ${ctx.constraintLabel}

BASE DIAGNOSIS to rewrite in Cameron's voice, personalized to the above:
${JSON.stringify(base)}`;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 800,
        temperature: 0.5,
        system,
        messages: [{ role: "user", content: user }]
      })
    });
    if (!res.ok) return null;
    const data = await res.json();
    const text = data?.content?.[0]?.text || "";
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start < 0 || end < 0) return null;
    const parsed = JSON.parse(text.slice(start, end + 1));
    if (!parsed.verdict || !Array.isArray(parsed.fixes) || parsed.fixes.length < 1) return null;
    return parsed;
  } catch {
    return null;
  }
}
async function logLead(ctx, result) {
  if (!ctx.email || /example\.(com|org|net)$/i.test(ctx.email)) return;
  try {
    await fetch("https://formspree.io/f/xkoqqldw", {
      method: "POST",
      headers: { "content-type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "New Operating Diagnostic lead",
        email: ctx.email || "(none)",
        business: ctx.business,
        revenue: ctx.revenue,
        team: ctx.team,
        frustration: ctx.frustration,
        constraint: ctx.constraintLabel,
        verdict: result.verdict
      })
    });
  } catch {
  }
}
function getApiKey() {
  try {
    const im = __vite_import_meta_env__?.ANTHROPIC_API_KEY;
    if (im) return im;
  } catch {
  }
  try {
    if (typeof process !== "undefined" && process.env && process.env.ANTHROPIC_API_KEY) {
      return process.env.ANTHROPIC_API_KEY;
    }
  } catch {
  }
  return "";
}
function jsonResponse(idx, ratings, result, personalized) {
  return new Response(
    JSON.stringify({
      constraintIndex: idx,
      constraintLabel: idx < 0 ? null : STATIONS[idx].label,
      ratings,
      verdict: result.verdict,
      read: result.read,
      fixes: result.fixes.slice(0, 3),
      personalized
    }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}
async function POST({ request }) {
  let idx = -1;
  let ratings = [];
  let result = ALL_GREEN;
  try {
    let body = {};
    try {
      body = await request.json();
    } catch {
    }
    ratings = Array.isArray(body.ratings) ? body.ratings.slice(0, 6) : [];
    idx = pickConstraint(ratings);
    result = idx < 0 ? ALL_GREEN : BASE[idx] || ALL_GREEN;
    const constraintLabel = idx < 0 ? "none (all solid)" : STATIONS[idx].short;
    const ctx = {
      business: (body.business || "").toString().slice(0, 400),
      revenue: (body.revenue || "").toString().slice(0, 40),
      team: (body.team || "").toString().slice(0, 40),
      frustration: (body.frustration || "").toString().slice(0, 800),
      vacation: (body.vacation || "").toString().slice(0, 400),
      email: (body.email || "").toString().slice(0, 200),
      constraintLabel
    };
    let personalized = false;
    const apiKey = getApiKey();
    if (apiKey) {
      try {
        const p = await personalize(result, ctx, apiKey);
        if (p) {
          result = p;
          personalized = true;
        }
      } catch {
      }
    }
    try {
      await logLead(ctx, result);
    } catch {
    }
    return jsonResponse(idx, ratings, result, personalized);
  } catch {
    return jsonResponse(idx, ratings, result, false);
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
