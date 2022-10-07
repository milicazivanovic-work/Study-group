// Gets user input
/*var prompt = require('syncprompt');
var name = prompt("What is your name? ");

// Uses  to print out information
function printHelloName(){
  for (var i = 0; i < 5; i++) {
      console.log("Hello " + name);
    }
  }  
printHelloName();
*/

// With paramater name
/*function printHelloName(name){
  name = "Milica";
  for (var i = 0; i < 5; i++) {
      console.log("Hello " + name);
    }
  }  
printHelloName();
*/

//Command Line Argument
function printHelloName(name) {
  if (process.argv[2] != '' || process.argv[2] != isNaN) {
    name = process.argv[2];
    console.log('Hello', name);
  } else {
    console.log('Hello', name);
  }
}

for (var i = 0; i < 5; i++) printHelloName('Milica');