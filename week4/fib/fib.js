function* fibonacci() {
  let a = 0, b = 1;
  yield a;
  yield b;
  while (true) {
    const next = a + b;
    yield next;
    a = b;
    b = next;
  }
}


const gen = fibonacci();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
