import { graveyardDatabase } from "@/app/database/graveDatabase";
import GraveyardItem from "./typeGraveyard";
const khundiNamesSet = new Set<string>();
graveyardDatabase.forEach((item: GraveyardItem) => {
  khundiNamesSet.add(item.KHUNDI);
});

const khundiNamesArray: string[] = Array.from(khundiNamesSet);

khundiNamesArray.sort();

export default khundiNamesArray;
