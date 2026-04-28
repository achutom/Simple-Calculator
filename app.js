const numbers = document.getElementsByClassName("num");
const operators = document.getElementsByClassName("operator");
const textfield = document.getElementById("textfield");

for (const num of numbers) {
  num.addEventListener("click", () => {
    textfield.value += num.innerHTML;
  });
}

for (const operator of operators) {
  operator.addEventListener("click", () => {
    if (operator.innerHTML === "=") {
      let result = eval(textfield.value);
      textfield.value = result;
    } else {
      textfield.value += operator.innerHTML;
    }
  });
}

function clearScreen() {
  textfield.value = "";
}
