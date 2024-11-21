import { addGalleryA } from "./GalleryA";
import { addGalleryB } from "./GalleryB";
import { addGalleryC } from "./GalleryC";

export const addAllGallerys = (editor) => {
  addGalleryA(editor);
  addGalleryB(editor);
  addGalleryC(editor);
};
