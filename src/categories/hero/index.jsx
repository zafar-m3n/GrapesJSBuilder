import { addHeroSectionA } from "./HeroSectionA";
import { addHeroSectionB } from "./HeroSectionB";
import { addHeroSectionC } from "./HeroSectionC";

export const addAllHeroSections = (editor) => {
  addHeroSectionA(editor);
  addHeroSectionB(editor);
  addHeroSectionC(editor);
};
