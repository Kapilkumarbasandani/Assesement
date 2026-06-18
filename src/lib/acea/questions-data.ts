// ACEA Question Bank — 135 questions across 10 categories
export const ACEA_CATEGORIES = [
  {
    "id": 1,
    "slug": "legal-compliance",
    "name": "Legal & Compliance",
    "count": 15
  },
  {
    "id": 2,
    "slug": "finance-management",
    "name": "Finance Management",
    "count": 20
  },
  {
    "id": 3,
    "slug": "governance-board",
    "name": "Governance & Board",
    "count": 15
  },
  {
    "id": 4,
    "slug": "leadership-strategy",
    "name": "Leadership & Strategy",
    "count": 10
  },
  {
    "id": 5,
    "slug": "human-resources",
    "name": "Human Resources",
    "count": 15
  },
  {
    "id": 6,
    "slug": "programs-impact",
    "name": "Programs & Impact",
    "count": 20
  },
  {
    "id": 7,
    "slug": "fundraising-donor",
    "name": "Fundraising & Donor Management",
    "count": 15
  },
  {
    "id": 8,
    "slug": "branding-visibility",
    "name": "Branding & Visibility",
    "count": 10
  },
  {
    "id": 9,
    "slug": "technology-data",
    "name": "Technology & Data Management",
    "count": 10
  },
  {
    "id": 10,
    "slug": "sustainability-growth",
    "name": "Sustainability & Growth",
    "count": 5
  }
] as const;

export const ACEA_QUESTIONS = [
  {
    "id": 1,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Is the organization legally registered?",
    "tooltip": "Check whether is the organization legally registered.",
    "evidenceRequired": "Legal & Compliance supporting evidence",
    "weightage": 1
  },
  {
    "id": 2,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Is the registration certificate available?",
    "tooltip": "Check whether is the registration certificate available.",
    "evidenceRequired": "Relevant registration/certificate document",
    "weightage": 1
  },
  {
    "id": 3,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Is PAN available?",
    "tooltip": "Check whether is pan available.",
    "evidenceRequired": "Relevant registration/certificate document",
    "weightage": 1
  },
  {
    "id": 4,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Is 12A registration valid?",
    "tooltip": "Check whether is 12a registration valid.",
    "evidenceRequired": "Relevant registration/certificate document",
    "weightage": 1
  },
  {
    "id": 5,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Is 80G registration valid?",
    "tooltip": "Check whether is 80g registration valid.",
    "evidenceRequired": "Relevant registration/certificate document",
    "weightage": 1
  },
  {
    "id": 6,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Is CSR Registration Number available?",
    "tooltip": "Check whether is csr registration number available.",
    "evidenceRequired": "Relevant registration/certificate document",
    "weightage": 1
  },
  {
    "id": 7,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Is FCRA registration available (if applicable)?",
    "tooltip": "Check whether is fcra registration available (if applicable).",
    "evidenceRequired": "Relevant registration/certificate document",
    "weightage": 1
  },
  {
    "id": 8,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Are annual returns filed on time?",
    "tooltip": "Check whether are annual returns filed on time.",
    "evidenceRequired": "Legal & Compliance supporting evidence",
    "weightage": 1
  },
  {
    "id": 9,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Are statutory registers maintained?",
    "tooltip": "Check whether are statutory registers maintained.",
    "evidenceRequired": "Legal & Compliance supporting evidence",
    "weightage": 1
  },
  {
    "id": 10,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Are board resolutions documented?",
    "tooltip": "Check whether are board resolutions documented.",
    "evidenceRequired": "Legal & Compliance supporting evidence",
    "weightage": 1
  },
  {
    "id": 11,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Are licenses renewed before expiry?",
    "tooltip": "Check whether are licenses renewed before expiry.",
    "evidenceRequired": "Legal & Compliance supporting evidence",
    "weightage": 1
  },
  {
    "id": 12,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Are legal records stored safely?",
    "tooltip": "Check whether are legal records stored safely.",
    "evidenceRequired": "Records or data evidence",
    "weightage": 1
  },
  {
    "id": 13,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Are donor compliance requirements tracked?",
    "tooltip": "Check whether are donor compliance requirements tracked.",
    "evidenceRequired": "Legal & Compliance supporting evidence",
    "weightage": 1
  },
  {
    "id": 14,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Is there a compliance calendar?",
    "tooltip": "Check whether is there a compliance calendar.",
    "evidenceRequired": "Legal & Compliance supporting evidence",
    "weightage": 1
  },
  {
    "id": 15,
    "categoryId": 1,
    "categorySlug": "legal-compliance",
    "categoryName": "Legal & Compliance",
    "text": "Is compliance responsibility assigned to a person?",
    "tooltip": "Check whether is compliance responsibility assigned to a person.",
    "evidenceRequired": "Legal & Compliance supporting evidence",
    "weightage": 1
  },
  {
    "id": 16,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Is accounting updated regularly?",
    "tooltip": "Check whether is accounting updated regularly.",
    "evidenceRequired": "Financial records or reports",
    "weightage": 1
  },
  {
    "id": 17,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Is accounting software used?",
    "tooltip": "Check whether is accounting software used.",
    "evidenceRequired": "Financial records or reports",
    "weightage": 1
  },
  {
    "id": 18,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are vouchers maintained?",
    "tooltip": "Check whether are vouchers maintained.",
    "evidenceRequired": "Finance Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 19,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are receipts filed properly?",
    "tooltip": "Check whether are receipts filed properly.",
    "evidenceRequired": "Finance Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 20,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are payment approvals documented?",
    "tooltip": "Check whether are payment approvals documented.",
    "evidenceRequired": "Finance Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 21,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Is petty cash controlled?",
    "tooltip": "Check whether is petty cash controlled.",
    "evidenceRequired": "Finance Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 22,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are bank reconciliations completed monthly?",
    "tooltip": "Check whether are bank reconciliations completed monthly.",
    "evidenceRequired": "Finance Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 23,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Is an annual budget prepared?",
    "tooltip": "Check whether is an annual budget prepared.",
    "evidenceRequired": "Financial records or reports",
    "weightage": 1
  },
  {
    "id": 24,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Is budget versus actual spending reviewed?",
    "tooltip": "Check whether is budget versus actual spending reviewed.",
    "evidenceRequired": "Financial records or reports",
    "weightage": 1
  },
  {
    "id": 25,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are financial reports shared with management?",
    "tooltip": "Check whether are financial reports shared with management.",
    "evidenceRequired": "Report or meeting minutes",
    "weightage": 1
  },
  {
    "id": 26,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Is an asset register maintained?",
    "tooltip": "Check whether is an asset register maintained.",
    "evidenceRequired": "Finance Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 27,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are procurement records maintained?",
    "tooltip": "Check whether are procurement records maintained.",
    "evidenceRequired": "Records or data evidence",
    "weightage": 1
  },
  {
    "id": 28,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Is an external audit conducted annually?",
    "tooltip": "Check whether is an external audit conducted annually.",
    "evidenceRequired": "Financial records or reports",
    "weightage": 1
  },
  {
    "id": 29,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are audit observations addressed?",
    "tooltip": "Check whether are audit observations addressed.",
    "evidenceRequired": "Financial records or reports",
    "weightage": 1
  },
  {
    "id": 30,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are donor funds tracked separately?",
    "tooltip": "Check whether are donor funds tracked separately.",
    "evidenceRequired": "Finance Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 31,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are financial policies documented?",
    "tooltip": "Check whether are financial policies documented.",
    "evidenceRequired": "Financial records or reports",
    "weightage": 1
  },
  {
    "id": 32,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are expense approvals defined?",
    "tooltip": "Check whether are expense approvals defined.",
    "evidenceRequired": "Finance Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 33,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Is cash handling minimized?",
    "tooltip": "Check whether is cash handling minimized.",
    "evidenceRequired": "Finance Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 34,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are supporting documents available for transactions?",
    "tooltip": "Check whether are supporting documents available for transactions.",
    "evidenceRequired": "Finance Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 35,
    "categoryId": 2,
    "categorySlug": "finance-management",
    "categoryName": "Finance Management",
    "text": "Are financial records backed up digitally?",
    "tooltip": "Check whether are financial records backed up digitally.",
    "evidenceRequired": "Financial records or reports",
    "weightage": 1
  },
  {
    "id": 36,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Does the board meet regularly?",
    "tooltip": "Check whether does the board meet regularly.",
    "evidenceRequired": "Governance & Board supporting evidence",
    "weightage": 1
  },
  {
    "id": 37,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Are meeting minutes recorded?",
    "tooltip": "Check whether are meeting minutes recorded.",
    "evidenceRequired": "Report or meeting minutes",
    "weightage": 1
  },
  {
    "id": 38,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Are attendance records maintained?",
    "tooltip": "Check whether are attendance records maintained.",
    "evidenceRequired": "Records or data evidence",
    "weightage": 1
  },
  {
    "id": 39,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Are board roles clearly defined?",
    "tooltip": "Check whether are board roles clearly defined.",
    "evidenceRequired": "Governance & Board supporting evidence",
    "weightage": 1
  },
  {
    "id": 40,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Is there a conflict of interest policy?",
    "tooltip": "Check whether is there a conflict of interest policy.",
    "evidenceRequired": "Policy or procedure document",
    "weightage": 1
  },
  {
    "id": 41,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Does the board review financial reports?",
    "tooltip": "Check whether does the board review financial reports.",
    "evidenceRequired": "Report or meeting minutes",
    "weightage": 1
  },
  {
    "id": 42,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Does the board review program performance?",
    "tooltip": "Check whether does the board review program performance.",
    "evidenceRequired": "Governance & Board supporting evidence",
    "weightage": 1
  },
  {
    "id": 43,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Does the board participate in planning?",
    "tooltip": "Check whether does the board participate in planning.",
    "evidenceRequired": "Plan or strategy document",
    "weightage": 1
  },
  {
    "id": 44,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Are decisions documented?",
    "tooltip": "Check whether are decisions documented.",
    "evidenceRequired": "Governance & Board supporting evidence",
    "weightage": 1
  },
  {
    "id": 45,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Is board diversity considered?",
    "tooltip": "Check whether is board diversity considered.",
    "evidenceRequired": "Governance & Board supporting evidence",
    "weightage": 1
  },
  {
    "id": 46,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Are board members active?",
    "tooltip": "Check whether are board members active.",
    "evidenceRequired": "Governance & Board supporting evidence",
    "weightage": 1
  },
  {
    "id": 47,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Are legal responsibilities understood?",
    "tooltip": "Check whether are legal responsibilities understood.",
    "evidenceRequired": "Governance & Board supporting evidence",
    "weightage": 1
  },
  {
    "id": 48,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Is succession planning discussed?",
    "tooltip": "Check whether is succession planning discussed.",
    "evidenceRequired": "Plan or strategy document",
    "weightage": 1
  },
  {
    "id": 49,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Are risks reviewed by the board?",
    "tooltip": "Check whether are risks reviewed by the board.",
    "evidenceRequired": "Governance & Board supporting evidence",
    "weightage": 1
  },
  {
    "id": 50,
    "categoryId": 3,
    "categorySlug": "governance-board",
    "categoryName": "Governance & Board",
    "text": "Does the board evaluate organizational progress?",
    "tooltip": "Check whether does the board evaluate organizational progress.",
    "evidenceRequired": "Governance & Board supporting evidence",
    "weightage": 1
  },
  {
    "id": 51,
    "categoryId": 4,
    "categorySlug": "leadership-strategy",
    "categoryName": "Leadership & Strategy",
    "text": "Is there a clear vision statement?",
    "tooltip": "Check whether is there a clear vision statement.",
    "evidenceRequired": "Leadership & Strategy supporting evidence",
    "weightage": 1
  },
  {
    "id": 52,
    "categoryId": 4,
    "categorySlug": "leadership-strategy",
    "categoryName": "Leadership & Strategy",
    "text": "Is there a clear mission statement?",
    "tooltip": "Check whether is there a clear mission statement.",
    "evidenceRequired": "Leadership & Strategy supporting evidence",
    "weightage": 1
  },
  {
    "id": 53,
    "categoryId": 4,
    "categorySlug": "leadership-strategy",
    "categoryName": "Leadership & Strategy",
    "text": "Are annual goals defined?",
    "tooltip": "Check whether are annual goals defined.",
    "evidenceRequired": "Leadership & Strategy supporting evidence",
    "weightage": 1
  },
  {
    "id": 54,
    "categoryId": 4,
    "categorySlug": "leadership-strategy",
    "categoryName": "Leadership & Strategy",
    "text": "Is a strategic plan available?",
    "tooltip": "Check whether is a strategic plan available.",
    "evidenceRequired": "Plan or strategy document",
    "weightage": 1
  },
  {
    "id": 55,
    "categoryId": 4,
    "categorySlug": "leadership-strategy",
    "categoryName": "Leadership & Strategy",
    "text": "Are targets reviewed periodically?",
    "tooltip": "Check whether are targets reviewed periodically.",
    "evidenceRequired": "Leadership & Strategy supporting evidence",
    "weightage": 1
  },
  {
    "id": 56,
    "categoryId": 4,
    "categorySlug": "leadership-strategy",
    "categoryName": "Leadership & Strategy",
    "text": "Are risks identified?",
    "tooltip": "Check whether are risks identified.",
    "evidenceRequired": "Leadership & Strategy supporting evidence",
    "weightage": 1
  },
  {
    "id": 57,
    "categoryId": 4,
    "categorySlug": "leadership-strategy",
    "categoryName": "Leadership & Strategy",
    "text": "Are opportunities discussed regularly?",
    "tooltip": "Check whether are opportunities discussed regularly.",
    "evidenceRequired": "Leadership & Strategy supporting evidence",
    "weightage": 1
  },
  {
    "id": 58,
    "categoryId": 4,
    "categorySlug": "leadership-strategy",
    "categoryName": "Leadership & Strategy",
    "text": "Is leadership shared across the organization?",
    "tooltip": "Check whether is leadership shared across the organization.",
    "evidenceRequired": "Leadership & Strategy supporting evidence",
    "weightage": 1
  },
  {
    "id": 59,
    "categoryId": 4,
    "categorySlug": "leadership-strategy",
    "categoryName": "Leadership & Strategy",
    "text": "Is decision-making documented?",
    "tooltip": "Check whether is decision-making documented.",
    "evidenceRequired": "Leadership & Strategy supporting evidence",
    "weightage": 1
  },
  {
    "id": 60,
    "categoryId": 4,
    "categorySlug": "leadership-strategy",
    "categoryName": "Leadership & Strategy",
    "text": "Are future priorities communicated to staff?",
    "tooltip": "Check whether are future priorities communicated to staff.",
    "evidenceRequired": "Leadership & Strategy supporting evidence",
    "weightage": 1
  },
  {
    "id": 61,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Is an HR policy available?",
    "tooltip": "Check whether is an hr policy available.",
    "evidenceRequired": "Policy or procedure document",
    "weightage": 1
  },
  {
    "id": 62,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Do employees receive appointment letters?",
    "tooltip": "Check whether do employees receive appointment letters.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 63,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Are job descriptions documented?",
    "tooltip": "Check whether are job descriptions documented.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 64,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Are employee files maintained?",
    "tooltip": "Check whether are employee files maintained.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 65,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Is attendance tracked?",
    "tooltip": "Check whether is attendance tracked.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 66,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Is leave tracked?",
    "tooltip": "Check whether is leave tracked.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 67,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Are performance reviews conducted?",
    "tooltip": "Check whether are performance reviews conducted.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 68,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Are staff trained regularly?",
    "tooltip": "Check whether are staff trained regularly.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 69,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Is staff feedback collected?",
    "tooltip": "Check whether is staff feedback collected.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 70,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Are volunteers managed formally?",
    "tooltip": "Check whether are volunteers managed formally.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 71,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Is employee conduct documented?",
    "tooltip": "Check whether is employee conduct documented.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 72,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Are grievance procedures available?",
    "tooltip": "Check whether are grievance procedures available.",
    "evidenceRequired": "Policy or procedure document",
    "weightage": 1
  },
  {
    "id": 73,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Are salary structures documented?",
    "tooltip": "Check whether are salary structures documented.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 74,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Are employee exits documented?",
    "tooltip": "Check whether are employee exits documented.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 75,
    "categoryId": 5,
    "categorySlug": "human-resources",
    "categoryName": "Human Resources",
    "text": "Are workplace safety measures followed?",
    "tooltip": "Check whether are workplace safety measures followed.",
    "evidenceRequired": "Human Resources supporting evidence",
    "weightage": 1
  },
  {
    "id": 76,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are projects aligned with the mission?",
    "tooltip": "Check whether are projects aligned with the mission.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 77,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are project plans documented?",
    "tooltip": "Check whether are project plans documented.",
    "evidenceRequired": "Plan or strategy document",
    "weightage": 1
  },
  {
    "id": 78,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are project budgets prepared?",
    "tooltip": "Check whether are project budgets prepared.",
    "evidenceRequired": "Financial records or reports",
    "weightage": 1
  },
  {
    "id": 79,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are beneficiaries identified clearly?",
    "tooltip": "Check whether are beneficiaries identified clearly.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 80,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Is beneficiary data maintained?",
    "tooltip": "Check whether is beneficiary data maintained.",
    "evidenceRequired": "Records or data evidence",
    "weightage": 1
  },
  {
    "id": 81,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are activities monitored regularly?",
    "tooltip": "Check whether are activities monitored regularly.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 82,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are field visits documented?",
    "tooltip": "Check whether are field visits documented.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 83,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are project reports prepared?",
    "tooltip": "Check whether are project reports prepared.",
    "evidenceRequired": "Report or meeting minutes",
    "weightage": 1
  },
  {
    "id": 84,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are outcomes measured?",
    "tooltip": "Check whether are outcomes measured.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 85,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are impact indicators defined?",
    "tooltip": "Check whether are impact indicators defined.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 86,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are success stories collected?",
    "tooltip": "Check whether are success stories collected.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 87,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are photographs and evidence maintained?",
    "tooltip": "Check whether are photographs and evidence maintained.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 88,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are beneficiary feedback mechanisms available?",
    "tooltip": "Check whether are beneficiary feedback mechanisms available.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 89,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are corrective actions tracked?",
    "tooltip": "Check whether are corrective actions tracked.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 90,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are project learnings documented?",
    "tooltip": "Check whether are project learnings documented.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 91,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are project risks identified?",
    "tooltip": "Check whether are project risks identified.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 92,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are partnerships documented?",
    "tooltip": "Check whether are partnerships documented.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 93,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are outcomes shared with donors?",
    "tooltip": "Check whether are outcomes shared with donors.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 94,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are impact reports published?",
    "tooltip": "Check whether are impact reports published.",
    "evidenceRequired": "Report or meeting minutes",
    "weightage": 1
  },
  {
    "id": 95,
    "categoryId": 6,
    "categorySlug": "programs-impact",
    "categoryName": "Programs & Impact",
    "text": "Are programs reviewed annually?",
    "tooltip": "Check whether are programs reviewed annually.",
    "evidenceRequired": "Programs & Impact supporting evidence",
    "weightage": 1
  },
  {
    "id": 96,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Is there a fundraising plan?",
    "tooltip": "Check whether is there a fundraising plan.",
    "evidenceRequired": "Plan or strategy document",
    "weightage": 1
  },
  {
    "id": 97,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Are donor targets defined?",
    "tooltip": "Check whether are donor targets defined.",
    "evidenceRequired": "Fundraising & Donor Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 98,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Is a donor database maintained?",
    "tooltip": "Check whether is a donor database maintained.",
    "evidenceRequired": "Records or data evidence",
    "weightage": 1
  },
  {
    "id": 99,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Are donor records updated regularly?",
    "tooltip": "Check whether are donor records updated regularly.",
    "evidenceRequired": "Records or data evidence",
    "weightage": 1
  },
  {
    "id": 100,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Are CSR prospects identified?",
    "tooltip": "Check whether are csr prospects identified.",
    "evidenceRequired": "Relevant registration/certificate document",
    "weightage": 1
  },
  {
    "id": 101,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Are funding proposals prepared?",
    "tooltip": "Check whether are funding proposals prepared.",
    "evidenceRequired": "Fundraising & Donor Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 102,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Are donor reports submitted on time?",
    "tooltip": "Check whether are donor reports submitted on time.",
    "evidenceRequired": "Report or meeting minutes",
    "weightage": 1
  },
  {
    "id": 103,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Are donor meetings documented?",
    "tooltip": "Check whether are donor meetings documented.",
    "evidenceRequired": "Fundraising & Donor Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 104,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Are fundraising results reviewed?",
    "tooltip": "Check whether are fundraising results reviewed.",
    "evidenceRequired": "Fundraising & Donor Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 105,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Is donor retention monitored?",
    "tooltip": "Check whether is donor retention monitored.",
    "evidenceRequired": "Fundraising & Donor Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 106,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Are funding sources diversified?",
    "tooltip": "Check whether are funding sources diversified.",
    "evidenceRequired": "Fundraising & Donor Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 107,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Are fundraising materials available?",
    "tooltip": "Check whether are fundraising materials available.",
    "evidenceRequired": "Fundraising & Donor Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 108,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Are donor acknowledgements sent?",
    "tooltip": "Check whether are donor acknowledgements sent.",
    "evidenceRequired": "Fundraising & Donor Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 109,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Is fundraising responsibility assigned?",
    "tooltip": "Check whether is fundraising responsibility assigned.",
    "evidenceRequired": "Fundraising & Donor Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 110,
    "categoryId": 7,
    "categorySlug": "fundraising-donor",
    "categoryName": "Fundraising & Donor Management",
    "text": "Are funding risks monitored?",
    "tooltip": "Check whether are funding risks monitored.",
    "evidenceRequired": "Fundraising & Donor Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 111,
    "categoryId": 8,
    "categorySlug": "branding-visibility",
    "categoryName": "Branding & Visibility",
    "text": "Does the organization have a website?",
    "tooltip": "Check whether does the organization have a website.",
    "evidenceRequired": "Branding & Visibility supporting evidence",
    "weightage": 1
  },
  {
    "id": 112,
    "categoryId": 8,
    "categorySlug": "branding-visibility",
    "categoryName": "Branding & Visibility",
    "text": "Is the website updated regularly?",
    "tooltip": "Check whether is the website updated regularly.",
    "evidenceRequired": "Branding & Visibility supporting evidence",
    "weightage": 1
  },
  {
    "id": 113,
    "categoryId": 8,
    "categorySlug": "branding-visibility",
    "categoryName": "Branding & Visibility",
    "text": "Are social media pages active?",
    "tooltip": "Check whether are social media pages active.",
    "evidenceRequired": "Branding & Visibility supporting evidence",
    "weightage": 1
  },
  {
    "id": 114,
    "categoryId": 8,
    "categorySlug": "branding-visibility",
    "categoryName": "Branding & Visibility",
    "text": "Is an annual report published?",
    "tooltip": "Check whether is an annual report published.",
    "evidenceRequired": "Report or meeting minutes",
    "weightage": 1
  },
  {
    "id": 115,
    "categoryId": 8,
    "categorySlug": "branding-visibility",
    "categoryName": "Branding & Visibility",
    "text": "Are impact stories shared publicly?",
    "tooltip": "Check whether are impact stories shared publicly.",
    "evidenceRequired": "Branding & Visibility supporting evidence",
    "weightage": 1
  },
  {
    "id": 116,
    "categoryId": 8,
    "categorySlug": "branding-visibility",
    "categoryName": "Branding & Visibility",
    "text": "Are media mentions documented?",
    "tooltip": "Check whether are media mentions documented.",
    "evidenceRequired": "Branding & Visibility supporting evidence",
    "weightage": 1
  },
  {
    "id": 117,
    "categoryId": 8,
    "categorySlug": "branding-visibility",
    "categoryName": "Branding & Visibility",
    "text": "Is branding consistent across channels?",
    "tooltip": "Check whether is branding consistent across channels.",
    "evidenceRequired": "Branding & Visibility supporting evidence",
    "weightage": 1
  },
  {
    "id": 118,
    "categoryId": 8,
    "categorySlug": "branding-visibility",
    "categoryName": "Branding & Visibility",
    "text": "Are photographs professionally maintained?",
    "tooltip": "Check whether are photographs professionally maintained.",
    "evidenceRequired": "Branding & Visibility supporting evidence",
    "weightage": 1
  },
  {
    "id": 119,
    "categoryId": 8,
    "categorySlug": "branding-visibility",
    "categoryName": "Branding & Visibility",
    "text": "Is contact information easily available?",
    "tooltip": "Check whether is contact information easily available.",
    "evidenceRequired": "Branding & Visibility supporting evidence",
    "weightage": 1
  },
  {
    "id": 120,
    "categoryId": 8,
    "categorySlug": "branding-visibility",
    "categoryName": "Branding & Visibility",
    "text": "Can stakeholders easily understand the organization's work?",
    "tooltip": "Check whether can stakeholders easily understand the organization's work.",
    "evidenceRequired": "Branding & Visibility supporting evidence",
    "weightage": 1
  },
  {
    "id": 121,
    "categoryId": 9,
    "categorySlug": "technology-data",
    "categoryName": "Technology & Data Management",
    "text": "Is important data stored digitally?",
    "tooltip": "Check whether is important data stored digitally.",
    "evidenceRequired": "Records or data evidence",
    "weightage": 1
  },
  {
    "id": 122,
    "categoryId": 9,
    "categorySlug": "technology-data",
    "categoryName": "Technology & Data Management",
    "text": "Are backups maintained?",
    "tooltip": "Check whether are backups maintained.",
    "evidenceRequired": "Technology & Data Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 123,
    "categoryId": 9,
    "categorySlug": "technology-data",
    "categoryName": "Technology & Data Management",
    "text": "Is access controlled?",
    "tooltip": "Check whether is access controlled.",
    "evidenceRequired": "Technology & Data Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 124,
    "categoryId": 9,
    "categorySlug": "technology-data",
    "categoryName": "Technology & Data Management",
    "text": "Are passwords managed securely?",
    "tooltip": "Check whether are passwords managed securely.",
    "evidenceRequired": "Technology & Data Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 125,
    "categoryId": 9,
    "categorySlug": "technology-data",
    "categoryName": "Technology & Data Management",
    "text": "Is donor data protected?",
    "tooltip": "Check whether is donor data protected.",
    "evidenceRequired": "Records or data evidence",
    "weightage": 1
  },
  {
    "id": 126,
    "categoryId": 9,
    "categorySlug": "technology-data",
    "categoryName": "Technology & Data Management",
    "text": "Is beneficiary data protected?",
    "tooltip": "Check whether is beneficiary data protected.",
    "evidenceRequired": "Records or data evidence",
    "weightage": 1
  },
  {
    "id": 127,
    "categoryId": 9,
    "categorySlug": "technology-data",
    "categoryName": "Technology & Data Management",
    "text": "Are cloud tools used?",
    "tooltip": "Check whether are cloud tools used.",
    "evidenceRequired": "Technology & Data Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 128,
    "categoryId": 9,
    "categorySlug": "technology-data",
    "categoryName": "Technology & Data Management",
    "text": "Are reports generated digitally?",
    "tooltip": "Check whether are reports generated digitally.",
    "evidenceRequired": "Report or meeting minutes",
    "weightage": 1
  },
  {
    "id": 129,
    "categoryId": 9,
    "categorySlug": "technology-data",
    "categoryName": "Technology & Data Management",
    "text": "Is organizational knowledge documented?",
    "tooltip": "Check whether is organizational knowledge documented.",
    "evidenceRequired": "Technology & Data Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 130,
    "categoryId": 9,
    "categorySlug": "technology-data",
    "categoryName": "Technology & Data Management",
    "text": "Is technology used to improve efficiency?",
    "tooltip": "Check whether is technology used to improve efficiency.",
    "evidenceRequired": "Technology & Data Management supporting evidence",
    "weightage": 1
  },
  {
    "id": 131,
    "categoryId": 10,
    "categorySlug": "sustainability-growth",
    "categoryName": "Sustainability & Growth",
    "text": "Does the organization have a growth plan?",
    "tooltip": "Check whether does the organization have a growth plan.",
    "evidenceRequired": "Plan or strategy document",
    "weightage": 1
  },
  {
    "id": 132,
    "categoryId": 10,
    "categorySlug": "sustainability-growth",
    "categoryName": "Sustainability & Growth",
    "text": "Does it have multiple funding sources?",
    "tooltip": "Check whether does it have multiple funding sources.",
    "evidenceRequired": "Sustainability & Growth supporting evidence",
    "weightage": 1
  },
  {
    "id": 133,
    "categoryId": 10,
    "categorySlug": "sustainability-growth",
    "categoryName": "Sustainability & Growth",
    "text": "Is future leadership identified?",
    "tooltip": "Check whether is future leadership identified.",
    "evidenceRequired": "Sustainability & Growth supporting evidence",
    "weightage": 1
  },
  {
    "id": 134,
    "categoryId": 10,
    "categorySlug": "sustainability-growth",
    "categoryName": "Sustainability & Growth",
    "text": "Are strategic partnerships being developed?",
    "tooltip": "Check whether are strategic partnerships being developed.",
    "evidenceRequired": "Sustainability & Growth supporting evidence",
    "weightage": 1
  },
  {
    "id": 135,
    "categoryId": 10,
    "categorySlug": "sustainability-growth",
    "categoryName": "Sustainability & Growth",
    "text": "Is long-term sustainability reviewed annually?",
    "tooltip": "Check whether is long-term sustainability reviewed annually.",
    "evidenceRequired": "Sustainability & Growth supporting evidence",
    "weightage": 1
  }
] as const;
