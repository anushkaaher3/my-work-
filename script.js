const display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value[display.value.length - 1];
  if (['+', '-', '*', '/', '.'].includes(lastChar)) return;
  display.value += operator;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value) || "";
  } catch {
    display.value = "Error";
  }
}