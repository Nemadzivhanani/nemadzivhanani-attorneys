// All firm content in one place (source: Business Profile 2026 supplied by the firm).

export const firm = {
  name: "Nemadzivhanani R Inc Attorneys",
  registeredName: "R Nemadzivhanani Attorneys Incorporated",
  short: "Nemadzivhanani R Inc.",
  tagline: "Professional. Responsive. Trusted.",
  subtitle: "Attorneys | Fiduciary Specialists",
  motto: "Equal Justice For All",
  email: "info@nemadzivhananiattorneys.co.za",
  whatsapp: "27646442014",
  whatsappDisplay: "064 644 2014",
  postal: "62 Marshall Street, Marshalltown, Johannesburg, Gauteng, 2001",
  siteUrl: "https://nemadzivhananiattorneys.co.za",
};

export const registration = [
  { label: "Company registration", value: "2023/160558/21", note: "Registered under the Companies Act, 2008, with records kept at the CIPC." },
  { label: "Legal Practice Council firm number", value: "71228", note: "A firm of attorneys registered with the Legal Practice Council." },
  { label: "Fidelity Fund Certificate", value: "FFC16209/2026", note: "Valid for 2026, issued by the Legal Practitioners' Fidelity Fund." },
  { label: "Information Regulator", value: "2026-063481", note: "Registered under POPIA, with a named Information Officer and Deputy." },
  { label: "Bankers", value: "First National Bank", note: "Separate Business, Trust and Estate Late accounts, so client and estate money is never mixed with the firm's own." },
];

export const fidelityNote =
  "Protection of trust money is subject to the provisions, requirements and limits of the Legal Practice Act and the Legal Practitioners' Fidelity Fund.";

export type Office = {
  id: string;
  name: string;
  area: string;
  lines: string[];
  phone: string;
  phoneDisplay: string;
  about: string;
  mapQuery: string;
};

export const offices: Office[] = [
  {
    id: "johannesburg",
    name: "Johannesburg head office",
    area: "Marshalltown, Johannesburg CBD",
    lines: ["8th Floor, Khotso House", "62 Marshall Street, Marshalltown", "Johannesburg, 2001"],
    phone: "+27101013607",
    phoneDisplay: "010 101 3607",
    about: "Close to the courts, the Master of the High Court and the main banks.",
    mapQuery: "Khotso House, 62 Marshall Street, Marshalltown, Johannesburg",
  },
  {
    id: "roodepoort",
    name: "Roodepoort office",
    area: "West Rand",
    lines: ["Office 114, 1st Floor, City Centre Building", "8 Luttig Street", "Roodepoort, 1724"],
    phone: "+27101013604",
    phoneDisplay: "010 101 3604",
    about: "For clients across the West Rand.",
    mapQuery: "City Centre Building, 8 Luttig Street, Roodepoort",
  },
  {
    id: "springs",
    name: "Springs office",
    area: "East Rand",
    lines: ["Bophelong Centre", "56 4th Street, Springs New", "Springs, 1559"],
    phone: "+27101013607",
    phoneDisplay: "010 101 3607",
    about: "For clients across Ekurhuleni and the East Rand.",
    mapQuery: "Bophelong Centre, 56 4th Street, Springs",
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  label: string;
  headline: string;
  punch: string;
  intro: string;
  includes: string[];
  steps: { title: string; text: string }[];
  image?: string;
  lead?: boolean;
};

export const services: Service[] = [
  {
    slug: "deceased-estates",
    title: "Deceased estates & fiduciary services",
    short: "Deceased estates",
    label: "Fiduciary services",
    headline: "Lost a loved one? We'll handle the estate.",
    punch: "Our specialist estate team takes the paperwork off your family.",
    intro:
      "When someone passes away, their estate must be reported to the Master of the High Court and wound up step by step. Our estate administrators do this every day, under the Director's supervision, and keep your family informed along the way.",
    includes: [
      "Reporting the estate to the Master of the High Court",
      "Getting Letters of Executorship",
      "Opening and running the Estate Late bank account",
      "Section 29 and Section 35 notices in the Government Gazette and newspapers",
      "Collecting and valuing assets, and paying debts",
      "Liquidation and Distribution (L&D) Account",
      "Paying out to heirs and beneficiaries",
      "Wills, testamentary trusts and estate planning",
    ],
    steps: [
      { title: "Tell us about your loved one", text: "On WhatsApp, by phone or at one of our offices. We'll tell you which documents to bring." },
      { title: "We report the estate", text: "We lodge the estate with the Master and apply for Letters of Executorship." },
      { title: "We secure the estate", text: "We open the Estate Late account, place the legal notices and trace the assets." },
      { title: "We settle the debts", text: "Creditors' claims are checked and paid, and assets are valued or sold if needed." },
      { title: "We pay the heirs", text: "Once the L&D Account is approved, we pay out to the heirs and close the file with the Master." },
    ],
    image: "/images/deceased-estates.jpg",
    lead: true,
  },
  {
    slug: "litigation",
    title: "Civil & commercial litigation",
    short: "Civil & commercial litigation",
    label: "Litigation",
    headline: "A dispute that won't go away? We'll take it to court.",
    punch: "From letters of demand to urgent High Court applications.",
    intro:
      "We act in the Magistrate's Court, Regional Court and High Court. The Director leads the strategy on every matter, and you get clear advice on your options before costs are incurred.",
    includes: [
      "Magistrate's Court, Regional Court and High Court litigation",
      "Commercial disputes and breach of contract",
      "Debt recovery",
      "Damages claims",
      "Urgent applications and interdicts",
    ],
    steps: [
      { title: "Tell us what happened", text: "Share the facts and any documents, letters or contracts you have." },
      { title: "We assess your case", text: "We explain your rights, the risks and the best way forward." },
      { title: "We try to settle", text: "Where it makes sense, a letter of demand or negotiation can save time and cost." },
      { title: "We go to court", text: "If needed, we draft the pleadings and represent you in the right court." },
      { title: "We see it through", text: "From judgment to enforcement, with updates at every step." },
    ],
  },
  {
    slug: "corporate-commercial",
    title: "Corporate & commercial law",
    short: "Corporate & commercial law",
    label: "Corporate & commercial",
    headline: "Contracts and companies, set up properly.",
    punch: "Practical legal support for businesses of every size.",
    intro:
      "Good agreements prevent disputes. We draft, check and negotiate the documents your business runs on, and help you stay compliant with the Companies Act.",
    includes: [
      "Drafting, checking and negotiating commercial agreements",
      "Service level agreements",
      "Memorandums of Incorporation",
      "Corporate governance and Companies Act compliance",
      "Company registration and CIPC filings",
    ],
    steps: [
      { title: "Tell us what you need", text: "A new contract, a review of one you were sent, or a new company." },
      { title: "We advise", text: "We explain the risks and what should be in the document." },
      { title: "We draft or review", text: "You get a clear document, with changes explained in plain language." },
      { title: "We finalise", text: "We help with negotiation, signing and any CIPC filings." },
    ],
  },
  {
    slug: "family-law",
    title: "Family & matrimonial law",
    short: "Family & matrimonial law",
    label: "Family law",
    headline: "Family matters, handled with care.",
    punch: "Respectful, private advice when it matters most.",
    intro:
      "Family matters are personal. We listen first, explain your options clearly and protect your interests and those of your children.",
    includes: [
      "Uncontested and contested divorces",
      "Parental rights and responsibilities",
      "Maintenance",
      "Antenuptial contracts",
      "Choosing a matrimonial property system",
    ],
    steps: [
      { title: "Talk to us in confidence", text: "Tell us your situation. Everything you share stays private." },
      { title: "We explain your options", text: "Settlement, mediation or court, and what each means for you." },
      { title: "We prepare the papers", text: "Agreements, summons or applications, drafted carefully." },
      { title: "We finalise the matter", text: "In court or by agreement, with you informed throughout." },
    ],
  },
  {
    slug: "property-general",
    title: "Property law & general practice",
    short: "Property & general practice",
    label: "Property & general",
    headline: "Property, leases and evictions, done by the book.",
    punch: "Clear help for owners, landlords and tenants.",
    intro:
      "Property matters must follow strict legal steps. We help you get them right the first time, and we also offer notarial and attestation services.",
    includes: [
      "Help with property transfers",
      "Drafting lease agreements",
      "Evictions under the statutory eviction procedures",
      "Notarial services",
      "Certified attestations and compliance checks",
    ],
    steps: [
      { title: "Tell us about the property", text: "The address, the parties and what you want to achieve." },
      { title: "We check the legal steps", text: "Every eviction, lease and transfer has its own rules. We explain them." },
      { title: "We prepare the documents", text: "Leases, notices or court papers, drafted to the required standard." },
      { title: "We finish the process", text: "We follow it through to the end, and keep you updated." },
    ],
  },
];

export type Person = {
  name: string;
  role: string;
  group: string;
  photo: string;
  text: string;
};

export const team: Person[] = [
  {
    name: "Rabelani Nemadzivhanani",
    role: "Director & Principal Attorney",
    group: "Leadership",
    photo: "/team/rabelani-nemadzivhanani.jpg",
    text: "Admitted Attorney of the High Court of South Africa, sole Director and the firm's Information Officer. He leads litigation strategy and complex estate and trust matters, and personally supervises legal files and estate accounts.",
  },
  {
    name: "Zwivhuya Fiona Nemadzivhanani",
    role: "Practice Manager & Deputy Information Officer",
    group: "Leadership",
    photo: "/team/zwivhuya-nemadzivhanani.jpg",
    text: "Runs the day-to-day work of the head office and branches: finance and administration, quality checks and client care. As Deputy Information Officer she oversees how the firm protects personal information under POPIA.",
  },
  {
    name: "Phumudzo Khedzi",
    role: "Estate Administrator",
    group: "Fiduciary & estates",
    photo: "/team/phumudzo-khedzi.jpg",
    text: "Reports estates to the Master of the High Court, secures Letters of Executorship, prepares creditor notices, traces and collects assets, and keeps the estate ledger.",
  },
  {
    name: "Xolelwa Ngwane",
    role: "Estate Administrator",
    group: "Fiduciary & estates",
    photo: "/team/xolelwa-ngwane.jpg",
    text: "Prepares Liquidation and Distribution Accounts, manages Estate Late bank accounts, processes creditor and heir claims, and closes files with the Master's Office.",
  },
  {
    name: "Dakalo Mukosi",
    role: "Candidate Attorney",
    group: "Legal team",
    photo: "/team/dakalo-mukosi.jpg",
    text: "Legal research, drafting court papers, civil litigation support, court attendances and client consultations under the Director's supervision.",
  },
  {
    name: "Thandiwe Mornica Khumalo",
    role: "Candidate Attorney",
    group: "Legal team",
    photo: "/team/thandiwe-khumalo.jpg",
    text: "Case research, motion court preparation, client correspondence, trial bundles and support across litigation matters.",
  },
  {
    name: "Keletso Pheme",
    role: "Paralegal",
    group: "Legal support",
    photo: "/team/keletso-pheme.jpg",
    text: "File management, court registry filings, client reception, preparing and serving legal documents, and support across all departments.",
  },
];

export const whyChooseUs = [
  { title: "Director-led", text: "The Director is accountable for every legal and estate mandate, so your matter gets senior attention." },
  { title: "Estate specialists", text: "A dedicated estate administration team, plus litigation and commercial law under one roof." },
  { title: "Three Gauteng offices", text: "Johannesburg CBD, Roodepoort and Springs, so help is close to home." },
  { title: "Compliant and careful", text: "Registered with the LPC, the Fidelity Fund and the Information Regulator. Client money is kept in separate trust and estate accounts." },
  { title: "Responsive service", text: "A coordinated legal and admin team that keeps you informed, including on WhatsApp." },
];

export const vision =
  "To be a leading legal and fiduciary practice in South Africa: responsive, accessible, and known for integrity, fast turnaround and high standards of governance.";

export const mission = [
  "Give sound, practical and ethical legal solutions, tailored to each person and business we serve.",
  "Wind up deceased estates efficiently, with care and accuracy, so families and executors are spared the stress.",
  "Stay fully compliant with every professional, tax and statutory body we answer to.",
];

export const values = [
  { title: "Integrity and ethical conduct", text: "We meet the profession's ethical standards and our duties of trust in every client and estate matter." },
  { title: "Professional accountability", text: "The Director manages the practice directly and answers for the quality of our work." },
  { title: "Empathy and dignity", text: "We speak with respect and honesty, especially to families dealing with a loss." },
  { title: "Information security", text: "Your information is kept confidential and protected in line with POPIA." },
];

export function waLink(message: string) {
  return `https://wa.me/${firm.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mapLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
