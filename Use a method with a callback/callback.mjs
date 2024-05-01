import * as fs from "node:fs";

const data = "Neil Gaiman";

fs.writeFile("1.txt", data, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Succes!");
});
