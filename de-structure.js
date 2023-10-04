let a, b, rest;
[a, b] = [1, 2];

console.log(a);
console.log(b);

[a, b, ...rest] = [1,2,3,4,5];
console.log(rest);