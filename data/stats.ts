export type Stat = {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
};

export const stats: Stat[] = [
  { value: 25, suffix: " yrs", label: "In the saw business", sub: "Since 2001" },
  { value: 3, suffix: "rd", label: "Generation family-owned", sub: "3G — three generations" },
  { value: 9, suffix: "+", label: "Industrial accounts", sub: "Steel, fab, CNC" },
  { value: 100, suffix: "%", label: "Mobile / on-site", sub: "We come to you" },
];
