module.exports = function toReadable(num) {
  if (!Number.isInteger(num)) return "not integer";

  let ones = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen",
  ];
  let tens = [
    "", "", "twenty", "thirty",  "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
  ];

  const range = num.toString().split("").reverse(); //.map(digit => +digit);

  let message = "";

  if (num < 0) return "negative number";
  if (num == 0) return "zero";
  if (num < 10) return ones[range[0]];

  const lastDigits = +(range[1] + range[0]);
  if (lastDigits < 20) {
    message = ones[lastDigits];
  } else {
    message = tens[range[1]] + " " + ones[range[0]];
  }

  if (range[2]) {
    message = ones[range[2]] + " hundred " + message;
  }

  return message.trim();
};
