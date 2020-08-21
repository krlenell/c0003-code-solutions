const max = 100;
let current = 0;

const statement = `Watch me count from ${max} starting from ${current}!`;

console.log(statement);

while (current <= max) {
  console.log(current);
  current++;
}

console.log('DONE!');
