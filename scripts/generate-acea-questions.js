const fs = require("fs");
const path = require("path");

const categories = [
  { id: 1, slug: "legal-compliance", name: "Legal & Compliance", count: 15 },
  { id: 2, slug: "finance-management", name: "Finance Management", count: 20 },
  { id: 3, slug: "governance-board", name: "Governance & Board", count: 15 },
  { id: 4, slug: "leadership-strategy", name: "Leadership & Strategy", count: 10 },
  { id: 5, slug: "human-resources", name: "Human Resources", count: 15 },
  { id: 6, slug: "programs-impact", name: "Programs & Impact", count: 20 },
  { id: 7, slug: "fundraising-donor", name: "Fundraising & Donor Management", count: 15 },
  { id: 8, slug: "branding-visibility", name: "Branding & Visibility", count: 10 },
  { id: 9, slug: "technology-data", name: "Technology & Data Management", count: 10 },
  { id: 10, slug: "sustainability-growth", name: "Sustainability & Growth", count: 5 },
];

const questionTexts = {
  "legal-compliance": [
    "Is the organization legally registered?",
    "Is the registration certificate available?",
    "Is PAN available?",
    "Is 12A registration valid?",
    "Is 80G registration valid?",
    "Is CSR Registration Number available?",
    "Is FCRA registration available (if applicable)?",
    "Are annual returns filed on time?",
    "Are statutory registers maintained?",
    "Are board resolutions documented?",
    "Are licenses renewed before expiry?",
    "Are legal records stored safely?",
    "Are donor compliance requirements tracked?",
    "Is there a compliance calendar?",
    "Is compliance responsibility assigned to a person?",
  ],
  "finance-management": [
    "Is accounting updated regularly?",
    "Is accounting software used?",
    "Are vouchers maintained?",
    "Are receipts filed properly?",
    "Are payment approvals documented?",
    "Is petty cash controlled?",
    "Are bank reconciliations completed monthly?",
    "Is an annual budget prepared?",
    "Is budget versus actual spending reviewed?",
    "Are financial reports shared with management?",
    "Is an asset register maintained?",
    "Are procurement records maintained?",
    "Is an external audit conducted annually?",
    "Are audit observations addressed?",
    "Are donor funds tracked separately?",
    "Are financial policies documented?",
    "Are expense approvals defined?",
    "Is cash handling minimized?",
    "Are supporting documents available for transactions?",
    "Are financial records backed up digitally?",
  ],
  "governance-board": [
    "Does the board meet regularly?",
    "Are meeting minutes recorded?",
    "Are attendance records maintained?",
    "Are board roles clearly defined?",
    "Is there a conflict of interest policy?",
    "Does the board review financial reports?",
    "Does the board review program performance?",
    "Does the board participate in planning?",
    "Are decisions documented?",
    "Is board diversity considered?",
    "Are board members active?",
    "Are legal responsibilities understood?",
    "Is succession planning discussed?",
    "Are risks reviewed by the board?",
    "Does the board evaluate organizational progress?",
  ],
  "leadership-strategy": [
    "Is there a clear vision statement?",
    "Is there a clear mission statement?",
    "Are annual goals defined?",
    "Is a strategic plan available?",
    "Are targets reviewed periodically?",
    "Are risks identified?",
    "Are opportunities discussed regularly?",
    "Is leadership shared across the organization?",
    "Is decision-making documented?",
    "Are future priorities communicated to staff?",
  ],
  "human-resources": [
    "Is an HR policy available?",
    "Do employees receive appointment letters?",
    "Are job descriptions documented?",
    "Are employee files maintained?",
    "Is attendance tracked?",
    "Is leave tracked?",
    "Are performance reviews conducted?",
    "Are staff trained regularly?",
    "Is staff feedback collected?",
    "Are volunteers managed formally?",
    "Is employee conduct documented?",
    "Are grievance procedures available?",
    "Are salary structures documented?",
    "Are employee exits documented?",
    "Are workplace safety measures followed?",
  ],
  "programs-impact": [
    "Are projects aligned with the mission?",
    "Are project plans documented?",
    "Are project budgets prepared?",
    "Are beneficiaries identified clearly?",
    "Is beneficiary data maintained?",
    "Are activities monitored regularly?",
    "Are field visits documented?",
    "Are project reports prepared?",
    "Are outcomes measured?",
    "Are impact indicators defined?",
    "Are success stories collected?",
    "Are photographs and evidence maintained?",
    "Are beneficiary feedback mechanisms available?",
    "Are corrective actions tracked?",
    "Are project learnings documented?",
    "Are project risks identified?",
    "Are partnerships documented?",
    "Are outcomes shared with donors?",
    "Are impact reports published?",
    "Are programs reviewed annually?",
  ],
  "fundraising-donor": [
    "Is there a fundraising plan?",
    "Are donor targets defined?",
    "Is a donor database maintained?",
    "Are donor records updated regularly?",
    "Are CSR prospects identified?",
    "Are funding proposals prepared?",
    "Are donor reports submitted on time?",
    "Are donor meetings documented?",
    "Are fundraising results reviewed?",
    "Is donor retention monitored?",
    "Are funding sources diversified?",
    "Are fundraising materials available?",
    "Are donor acknowledgements sent?",
    "Is fundraising responsibility assigned?",
    "Are funding risks monitored?",
  ],
  "branding-visibility": [
    "Does the organization have a website?",
    "Is the website updated regularly?",
    "Are social media pages active?",
    "Is an annual report published?",
    "Are impact stories shared publicly?",
    "Are media mentions documented?",
    "Is branding consistent across channels?",
    "Are photographs professionally maintained?",
    "Is contact information easily available?",
    "Can stakeholders easily understand the organization's work?",
  ],
  "technology-data": [
    "Is important data stored digitally?",
    "Are backups maintained?",
    "Is access controlled?",
    "Are passwords managed securely?",
    "Is donor data protected?",
    "Is beneficiary data protected?",
    "Are cloud tools used?",
    "Are reports generated digitally?",
    "Is organizational knowledge documented?",
    "Is technology used to improve efficiency?",
  ],
  "sustainability-growth": [
    "Does the organization have a growth plan?",
    "Does it have multiple funding sources?",
    "Is future leadership identified?",
    "Are strategic partnerships being developed?",
    "Is long-term sustainability reviewed annually?",
  ],
};

function makeTooltip(text) {
  const cleaned = text.replace(/\?$/, "").toLowerCase();
  if (cleaned.startsWith("is ") || cleaned.startsWith("are ") || cleaned.startsWith("does ") || cleaned.startsWith("do ") || cleaned.startsWith("can ")) {
    return `Check whether ${cleaned}.`;
  }
  return `Assess: ${cleaned}.`;
}

function makeEvidence(text, categoryName) {
  const t = text.toLowerCase();
  if (t.includes("certificate") || t.includes("registration") || t.includes("pan") || t.includes("12a") || t.includes("80g") || t.includes("fcra") || t.includes("csr")) {
    return "Relevant registration/certificate document";
  }
  if (t.includes("policy") || t.includes("procedure")) return "Policy or procedure document";
  if (t.includes("report") || t.includes("minutes")) return "Report or meeting minutes";
  if (t.includes("budget") || t.includes("financial") || t.includes("accounting") || t.includes("audit")) return "Financial records or reports";
  if (t.includes("plan") || t.includes("strategy")) return "Plan or strategy document";
  if (t.includes("data") || t.includes("database") || t.includes("records")) return "Records or data evidence";
  return `${categoryName} supporting evidence`;
}

let id = 1;
const questions = [];
for (const cat of categories) {
  for (const text of questionTexts[cat.slug]) {
    questions.push({
      id,
      categoryId: cat.id,
      categorySlug: cat.slug,
      categoryName: cat.name,
      text,
      tooltip: makeTooltip(text),
      evidenceRequired: makeEvidence(text, cat.name),
      weightage: 1,
    });
    id++;
  }
}

const outDir = path.join(__dirname, "..", "src", "lib", "acea");
fs.mkdirSync(outDir, { recursive: true });
const out =
  `// ACEA Question Bank — 135 questions across 10 categories\n` +
  `export const ACEA_CATEGORIES = ${JSON.stringify(categories, null, 2)} as const;\n\n` +
  `export const ACEA_QUESTIONS = ${JSON.stringify(questions, null, 2)} as const;\n`;
fs.writeFileSync(path.join(outDir, "questions-data.ts"), out);
console.log("Generated", questions.length, "ACEA questions");
