import {
  Calculator,
  Briefcase,
  Code2,
  Palette,
  Target,
  Search,
  Mail,
  Headphones,
  Receipt,
  Wallet,
  ClipboardCheck,
  TrendingUp,
  Landmark,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Building2,
  Store,
  Cpu,
  FolderKanban,
  Users,
  CalendarDays,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export const PHONE = "+1 (832) 951-2823";
export const PHONE_HREF = "tel:+18329512823";
export const EMAIL = "info@elitesolutionusa.com";
export const LINKEDIN = "https://www.linkedin.com/company/elitesolutionusa/";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

export const financialServices: ServiceItem[] = [
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description:
      "Accurate books, clean monthly closes, and reports you can use to run the business.",
    items: [
      "Monthly bookkeeping",
      "Financial statements",
      "Bank reconciliations",
      "Year-end close support",
    ],
  },
  {
    icon: Receipt,
    title: "Tax Services",
    description:
      "Preparation, planning, and filing that keeps you compliant and avoids surprises.",
    items: [
      "Business tax filing",
      "Tax planning",
      "Quarterly estimates",
      "IRS / authority support",
    ],
  },
  {
    icon: Wallet,
    title: "Payroll Outsourcing",
    description:
      "Payroll processed on time with taxes, filings, and compliance handled for you.",
    items: [
      "Employee payroll",
      "Tax withholdings",
      "Direct deposits",
      "Payroll reports",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Review",
    description:
      "Independent audits and reviews that strengthen reporting and stakeholder trust.",
    items: [
      "Financial audits",
      "Review engagements",
      "Internal controls",
      "Compliance reviews",
    ],
  },
  {
    icon: TrendingUp,
    title: "CFO Services",
    description:
      "Part-time CFO guidance for budgets, forecasts, dashboards, and board reporting.",
    items: [
      "Cash-flow forecasting",
      "Budget planning",
      "KPI dashboards",
      "Strategic advisory",
    ],
  },
];

export const nonFinancialServices: ServiceItem[] = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, modern websites and web apps built to convert visitors into customers.",
    items: [
      "Custom websites",
      "E-commerce stores",
      "Web applications",
      "CMS & maintenance",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description:
      "Brand identities and marketing visuals that look sharp and stay consistent.",
    items: [
      "Brand identity",
      "Marketing collateral",
      "UI / UX design",
      "Social creatives",
    ],
  },
  {
    icon: Target,
    title: "Marketing Strategies",
    description:
      "Data-driven campaigns planned around your market, budget, and goals.",
    items: [
      "Go-to-market plans",
      "Campaign strategy",
      "Brand positioning",
      "Growth consulting",
    ],
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Technical and content SEO that grows organic traffic and revenue.",
    items: [
      "Technical SEO",
      "On-page optimization",
      "Content strategy",
      "Local SEO",
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Campaigns and automation that nurture leads and bring customers back.",
    items: [
      "Campaign design",
      "Automation flows",
      "List growth",
      "Performance reports",
    ],
  },
  {
    icon: Headphones,
    title: "Help Line Services",
    description:
      "Responsive customer support operations that scale with your business.",
    items: [
      "Customer support",
      "Inbound call handling",
      "Ticket management",
      "24/7 coverage options",
    ],
  },
];

/** Home page preview cards (category summaries) */
export const coreServices = [
  {
    icon: Calculator,
    title: "Financial Services",
    href: "/services#financial",
    image: "/service-financial.png",
    imageAlt: "Financial planning and accounting workspace",
    items: financialServices.map((s) => ({
      title: s.title,
      icon: s.icon,
    })),
  },
  {
    icon: Briefcase,
    title: "Non Financial Services",
    href: "/services#non-financial",
    image: "/service-non-financial.png",
    imageAlt: "Digital design and marketing collaboration",
    items: nonFinancialServices.map((s) => ({
      title: s.title,
      icon: s.icon,
    })),
  },
];

export const heroStats = [
  {
    icon: FolderKanban,
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
  },
  { icon: Users, value: 100, suffix: "+", label: "Happy Clients" },
  {
    icon: CalendarDays,
    value: 5,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: BadgeCheck,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export type Industry = {
  icon: LucideIcon;
  name: string;
};

export const industries: Industry[] = [
  { icon: Landmark, name: "Finance" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: GraduationCap, name: "Education" },
  { icon: Building2, name: "Real Estate" },
  { icon: Store, name: "Retail" },
  { icon: Cpu, name: "Technology" },
];

export const offices = [
  {
    country: "USA",
    email: "usa@elitesolutionusa.com",
    address: "1493 Fairway Drive, Naperville, Illinois 60563",
    phone: "+1 (832) 951-2823",
  },
  {
    country: "Saudi Arabia",
    email: "ksa@elitesolutionusa.com",
    address:
      "Prince Nawaf Street, Building No 32, Suite No 201, Al Khobar",
    phone: "(+966) 56-1377801",
  },
  {
    country: "Pakistan",
    email: "pak@elitesolutionusa.com",
    address:
      "Good Time Apartments, Office M4, Main University Rd, Gulshan-e-Iqbal, Karachi",
    phone: "(+92) 336-2129231",
  },
];
