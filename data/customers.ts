// Real B2B customers from the owner intake. Customer permission to publicly
// list should be confirmed before going live with the real domain.
// TODO: re-populate from owner intake once each customer has confirmed permission to be listed publicly.
export type Customer = {
  name: string;
  category?: string;
};

export const customers: Customer[] = [];
