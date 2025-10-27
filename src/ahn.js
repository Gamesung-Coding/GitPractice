import { verifyName } from "./verifyName";

const name = "ahn";

if (verifyName(name)) {
  console.log(`${name}: Hello World!`);
} else {
  console.log(`${name}: Invalid name.`);
}
