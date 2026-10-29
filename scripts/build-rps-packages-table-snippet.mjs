/**
 * Build RPS mentoring packages table snippet from original readiness block (logo preserved).
 */
import fs from "fs";
import path from "path";

const transcript =
  "C:/Users/alan/.cursor/projects/g-Dropbox-alan-ranger-photography-Website-Code-Chat-AI-Bot/agent-transcripts/e8d8c8af-3c8f-47e3-b672-cb5b71d8981b/e8d8c8af-3c8f-47e3-b672-cb5b71d8981b.jsonl";

const outPath =
  "G:/Dropbox/alan ranger photography/Website Code/Blog Snippet Code Blocks/rps-mentoring-packages-table-squarespace-snippet-v1.html";

const raw = fs.readFileSync(transcript, "utf8");
const logoMatch = raw.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);
if (!logoMatch) throw new Error("Logo base64 not found in transcript");
const logoSrc = `data:image/png;base64,${logoMatch[1]}`;

const html = `<!-- BLOCK 02 — RPS mentoring packages table (ar-tbl-left, watermark). id="ready". -->
<span id="ready" style="display:block;position:relative;top:-90px;visibility:hidden"></span>
<div class="ar-tbl-card">
  <div class="ar-tbl-head">
    <img class="ar-wm" src="${logoSrc}" alt="Alan Ranger Photography logo">
    <h2>RPS mentoring packages (Zoom)</h2>
    <p>Pay once, book your dates later — bundles save up to 25%</p>
  </div>
  <table class="ar-tbl-left">
    <thead><tr><th style="text-align:left">Package</th><th style="text-align:left">What it's for</th><th style="text-align:left">Mon–Fri 9–5</th><th style="text-align:left">Mon–Sun 9–9</th></tr></thead>
    <tbody>
      <tr><td style="text-align:left" data-label="Package">Single session — 1 × 1hr</td><td style="text-align:left" data-label="What it's for">Fact-find &amp; review</td><td style="text-align:left" data-label="Mon–Fri 9–5">£50</td><td style="text-align:left" data-label="Mon–Sun 9–9">£75</td></tr>
      <tr><td style="text-align:left" data-label="Package">Starter bundle — 4 × 1hr · 15% off</td><td style="text-align:left" data-label="What it's for">Reset a failed panel</td><td style="text-align:left" data-label="Mon–Fri 9–5">£170</td><td style="text-align:left" data-label="Mon–Sun 9–9">£255</td></tr>
      <tr><td style="text-align:left" data-label="Package">Improver bundle — 6 × 1hr · 20% off</td><td style="text-align:left" data-label="What it's for">From scratch (recommended)</td><td style="text-align:left" data-label="Mon–Fri 9–5">£240</td><td style="text-align:left" data-label="Mon–Sun 9–9">£360</td></tr>
      <tr><td style="text-align:left" data-label="Package">Committed bundle — 8 × 1hr · 25% off</td><td style="text-align:left" data-label="What it's for">Extended panel build</td><td style="text-align:left" data-label="Mon–Fri 9–5">£300</td><td style="text-align:left" data-label="Mon–Sun 9–9">£450</td></tr>
      <tr><td style="text-align:left" data-label="Package">Best-value bundle — 12 × 1hr · 25% off</td><td style="text-align:left" data-label="What it's for">Best value — full programme</td><td style="text-align:left" data-label="Mon–Fri 9–5">£450</td><td style="text-align:left" data-label="Mon–Sun 9–9">£675</td></tr>
    </tbody>
  </table>
</div>
<div class="ar-buy-note">Start with one session if you're not sure. From scratch, most need a minimum of six; to reset a panel that didn't pass, around four. Following payment, Alan will send you a link to book your dates and times in his diary, plus a shared Dropbox folder link to upload your photos to.</div>
<style>
.ar-tbl-card{border:1px solid #e6e6e6;border-radius:14px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.06);margin:8px 0;font-weight:600}
.ar-tbl-card *{ box-sizing:border-box }
.ar-tbl-head{position:relative;overflow:hidden;background:linear-gradient(180deg,#F0890C 0%,#d96b00 70%,#b85600 100%);padding:22px 24px}
.ar-tbl-head h2{ margin:0; position:relative; z-index:2; font-size:clamp(22px,2.8vw,28px); font-weight:800; color:#1f1205; letter-spacing:-.01em }
.ar-tbl-head p{margin:4px 0 0;position:relative;z-index:2;font-size:clamp(14px,1.6vw,16px);font-weight:700;color:#fff}
.ar-wm{ position:absolute; top:50%; right:26px; transform:translateY(-50%); height:78%; width:auto; opacity:.18; z-index:1; pointer-events:none }
.ar-tbl-left{ width:100%; border-collapse:collapse }
.ar-tbl-left th,.ar-tbl-left td{text-align:left !important}
.ar-tbl-left th{background:#111827;color:#fff;padding:15px 18px;font-size:14px;letter-spacing:.04em;text-transform:uppercase;font-weight:800}
.ar-tbl-left td{padding:16px 18px;border-top:1px solid #eee;font-weight:600;color:#1f242a;line-height:1.45;font-size:15.5px}
.ar-tbl-left td:first-child{border-left:4px solid #E57200;font-weight:800;color:#111827}
.ar-tbl-left td:nth-child(2){ color:#c45f00; font-weight:700 }
.ar-tbl-left td:last-child,.ar-tbl-left td:nth-child(3){ font-weight:800; color:#c45f00; white-space:nowrap }
.ar-tbl-left tr:nth-child(even){ background:#fff3e8 }
.ar-tbl-left tr:hover{ background:#fff4e8 }
.ar-buy-note{background:#faf7f3;border-left:4px solid #E57200;border-radius:0 10px 10px 0;padding:15px 18px;margin:8px 0;font-size:14.5px;color:#1f242a;font-weight:600;line-height:1.6}
@media(max-width:680px){
  .ar-wm{ height:58%; right:16px; opacity:.14 }
  .ar-tbl-left thead{ position:absolute; left:-9999px }
  .ar-tbl-left tr{display:block;border-top:1px solid #eee}
  .ar-tbl-left td{display:block;border-top:none;padding:4px 18px}
  .ar-tbl-left td:first-child{border-left:4px solid #E57200;padding-top:14px}
  .ar-tbl-left td:last-child{ padding-bottom:14px }
  .ar-tbl-left td:not(:first-child):before{content:attr(data-label) ": ";font-weight:800;color:#9a6a3a;text-transform:uppercase;font-size:11px;letter-spacing:.04em;display:block;margin-bottom:2px}
}
</style>
`;

function assertSpacedCss(html, label) {
  const hits = [];
  String(html).replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, (_, css) => {
    const re = /\{[^\s{}]+\}/g;
    let m;
    while ((m = re.exec(css))) hits.push(m[0]);
    return _;
  });
  if (hits.length) throw new Error(`${label}: compressed CSS (add spaces inside { }): ${hits[0]}`);
}

assertSpacedCss(html, "rps table snippet");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, html, "utf8");
console.log("Wrote", outPath, `(${html.length} bytes)`);
