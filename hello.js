function printHelloName(name) {
  if (process.argv[2] != undefined) {
    console.log('Hello', process.argv[2]);
  } else {
    console.log('Hello', name);
  }
}

for (var i = 0; i < 5; i++) printHelloName('Milica');