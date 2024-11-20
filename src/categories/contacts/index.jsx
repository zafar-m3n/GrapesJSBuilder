import { addContactA } from "./contactA";
import { addContactB } from "./contactB";

export const addAllContacts = (editor) => {
  addContactA(editor);
  addContactB(editor);
};
