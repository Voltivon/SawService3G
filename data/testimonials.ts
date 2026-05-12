export type Testimonial = {
  quote: string;
  attribution: string;
  attributionRole?: string;
};

// Real customer quote from the owner intake — names redacted to "facility
// manager" style until permissions are confirmed.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Hey brother, I really appreciate you and Mason — you guys are a work of art. Thank you so much.",
    attribution: "Facility manager",
    attributionRole: "Greater Houston steel service center",
  },
];
