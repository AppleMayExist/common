import {random, isJSON, error} from "./mod.ts";

console.log("some random numbers for you!");
for (let i = 0; i < 10; i++) {
    console.log(random(i, i + 10));
}

console.log("Please input text, I'll tell you whether it's valid JSON.");
const x = new Uint8Array(1024);
await Deno.stdin.read(x);

isJSON(x.map((e) => {
    if (e === 0) {return 32}
    return e
})) ? console.log("Valid JSON") : console.log("Invalid JSON");

console.log("Now I'm gonna error out.");
error("peace");