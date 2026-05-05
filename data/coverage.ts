export type CoverageState = {
  code: string;
  name: string;
  primary?: boolean;
};

export const coverage: CoverageState[] = [
  { code: "TX", name: "Texas", primary: true },
  { code: "LA", name: "Louisiana" },
  { code: "OK", name: "Oklahoma" },
  { code: "AR", name: "Arkansas" },
  { code: "NM", name: "New Mexico" },
  { code: "MS", name: "Mississippi" },
];

export const houston = { lat: 29.7604, lng: -95.3698 };

// Cities served from the Greater Houston Area — used as crawlable copy for
// local long-tail discovery. Keep in NAP-consistent, comma-separated form.
export const citiesServed: string[] = [
  "Houston",
  "Sugar Land",
  "Pasadena",
  "Pearland",
  "The Woodlands",
  "Conroe",
  "Baytown",
  "Texas City",
  "Galveston",
  "League City",
  "Beaumont",
  "Port Arthur",
  "Katy",
  "Cypress",
  "Spring",
  "Tomball",
  "Humble",
  "Channelview",
  "Deer Park",
  "La Porte",
  "Stafford",
  "Missouri City",
];
