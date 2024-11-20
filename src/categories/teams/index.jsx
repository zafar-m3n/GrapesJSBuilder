import { addTeamsA } from "./teamA";
import { addTeamsB } from "./teamB";
import { addTeamsC } from "./teamC";

export const addAllTeams = (editor) => {
  addTeamsA(editor);
  addTeamsB(editor);
  addTeamsC(editor);
};
