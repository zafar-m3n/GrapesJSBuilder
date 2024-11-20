import { addTestimonialsA } from "./TestimonialsA";
import { addTestimonialsB } from "./TestimonialsB";
import { addTestimonialsC } from "./TestimonialsC";

export const addAllTestimonials = (editor) => {
  addTestimonialsA(editor);
  addTestimonialsB(editor);
  addTestimonialsC(editor);
};
