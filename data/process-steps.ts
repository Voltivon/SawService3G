import { Phone, Search, Wrench, BadgeCheck } from "lucide-react";

export type ProcessStep = {
  n: number;
  title: string;
  blurb: string;
  Icon: typeof Phone;
};

export const processSteps: ProcessStep[] = [
  {
    n: 1,
    title: "Call",
    blurb:
      "One phone call. Tell us the saw, the symptom, the urgency. We schedule fast.",
    Icon: Phone,
  },
  {
    n: 2,
    title: "Diagnose On-Site",
    blurb:
      "We come to your facility, inspect the machine, and confirm the work needed before we start.",
    Icon: Search,
  },
  {
    n: 3,
    title: "Repair",
    blurb:
      "Mechanical, hydraulic, electrical — handled by techs who've seen these machines for 25 years.",
    Icon: Wrench,
  },
  {
    n: 4,
    title: "Verify & Bill",
    blurb:
      "We test, document, and walk you through the work. Invoice after the job is done right.",
    Icon: BadgeCheck,
  },
];
