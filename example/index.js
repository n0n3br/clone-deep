/* to run: babel-node index.js */

import cloneDeep from "../index.js";

let a = { a: { c: [1, 2, 3], d: [4, 5, 6] }, b: [4, 5, 6] };
let b = cloneDeep(a);
console.log("a => ", a);
console.log("b => ", b);
a.a.c[0] = 2;
a.a.d[0] = 5;
a.b[0] = 5;

console.log("a after changes => ", a);
console.log("b after changes => ", b);
