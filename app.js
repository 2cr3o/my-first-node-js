'use strict';
const a = process.argv[2] || 0;
let b = 0;
for(let i = 1; i <= a; i++){
  b = b + i;
}
console.log(b);