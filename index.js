const trafficColor = function (colorname) {
  const color1 = "Красный";
  const color2 = "Жёлтый";
  const color3 = "Зелёный";
  if (colorname === color1) {
    return "Стой";
  } else if (colorname === color2) {
    return "Приготовся";
  } else if (colorname === color3) {
    return "Можно - продолжать - движение";
  } else {
    return "Введите - цвет";
  }
};

const month = "user-month";
switch (month) {
  case "12":
  case "1":
  case "2": {
    console.log("Зима");
    break;
  }
  case "3":
  case "4":
  case "5": {
    console.log("Весна");
    break;
  }
  case "6":
  case "7":
  case "8": {
    console.log("Лето");
    break;
  }
  case "9":
  case "10":
  case "11": {
    console.log("Осень");
    break;
  }
  default: {
    console.log("Введите число месяца");
    break;
  }
};

const x = +prompt('Введите x');
const y = +prompt('Введите y');
const operator = prompt('Введите оператор');
function calculator(x, y, operator){
const result;
  switch(operator){
    case'+':{
     result = x + y;
      break;
    }
    case'-':{
      result = x - y;
      break;
    }
    case'*':{
      result = x * y;
      break;
    }
    case'/':{
      result = x / y;
      break;
    }
  
  }
  return result
}
