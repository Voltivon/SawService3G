// Real B2B customers from the owner intake. Customer permission to publicly
// list should be confirmed before going live with the real domain.
export type Customer = {
  name: string;
  category?: string;
};

export const customers: Customer[] = [
  { name: "North American Metals", category: "Steel service" },
  { name: "EMJ", category: "Metal distribution" },
  { name: "National Tube Supply", category: "Tube & pipe" },
  { name: "Marmon Keystone", category: "Tube & pipe" },
  { name: "Sigma", category: "Metal fabrication" },
  { name: "US Alloys", category: "Alloy distribution" },
  { name: "Tube Supply", category: "Tube & pipe" },
  { name: "Cromedane", category: "Metal supply" },
  { name: "NSA", category: "Industrial supply" },
];
