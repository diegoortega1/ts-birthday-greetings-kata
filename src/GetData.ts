import fs from "fs";
import path from "path";
export function getData(fileName: string) {
  const data = fs.readFileSync(
    path.resolve(__dirname, `../resources/${fileName}`),
    "UTF-8"
  );

  // split the contents by new line
  const lines = data.split(/\r?\n/);
  lines.shift();
  return lines;
}
