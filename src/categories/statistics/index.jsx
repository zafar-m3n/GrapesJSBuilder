import { addStatisticsA } from "./StatisticsA";
import { addStatisticsB } from "./StatisticsB";
import { addStatisticsC } from "./StatisticsC";

export const addAllStatistics = (editor) => {
  addStatisticsA(editor);
  addStatisticsB(editor);
  addStatisticsC(editor);
};
