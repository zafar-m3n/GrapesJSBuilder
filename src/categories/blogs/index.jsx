import { addBlogA } from "./blogA";
import { addBlogB } from "./blogB";

export const addAllBlogs = (editor) => {
  addBlogA(editor);
  addBlogB(editor);
};
