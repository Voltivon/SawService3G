export type Stat = {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
};

export const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years in business", sub: "Since 2005" },
  { value: 20, suffix: "+", label: "Active customers", sub: "B2B accounts" },
  { value: 9, suffix: "+", label: "Brands serviced", sub: "And many more" },
  { value: 100, suffix: "%", label: "Mobile / on-site", sub: "We come to you" },
];
