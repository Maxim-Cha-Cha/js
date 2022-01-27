const numbername = function (number) {
  if (number % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
};
const number1 = +prompt("Enter namber");
const result = numbername(number1);
console.log(result);

const userNamber = function (num1, num2) {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
};

const money = function(num1, num2){
  if(num1 => num2){
    return 'Вам хватает денег'
  }else {
    return 'Вам не хватает денег'
  }
}