import { addPricingA } from "./PricingA";
import { addPricingB } from "./PricingB";

export const addAllPricing = (editor) => {
  addPricingA(editor);
  addPricingB(editor);
};
