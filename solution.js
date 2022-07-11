//#1

let determiner = -76;

let x;

// determiner < 0 ? x < 0 : determiner >= 0 ? x >= 0 : ""

if (determiner < 0) {
  x = "Less than 0";
} else if (determiner >= 0) {
  x = "Greater or equal to 0";
}

console.log(x);

//#2

let updater;

if (determiner >= 0) {
  updater >= 0;

  let message = "Positive Integer";
  console.log(message);
} else if (determiner < 0) {
  updater = "Less than zero";
  console.log(updater);
}

// If message is printed outside of the if statment it would return an error b/c the variable message is only defined inside the if statment and not outside. In other words, it doen't have a global visibility

//#3

// Ternary is used when there is one line of condition to check and if/else statement is used when we have multiple lines of conditions or when there is a complicated  code
