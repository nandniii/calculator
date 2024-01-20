const result = document.querySelector("#result");

function addToScreen(value) {
  const regex = result.innerHTML.split("");
  const ops = ["+", "-", "×", "÷", "/", "%", "."];

  if (ops.includes(value)) {
    if (!regex.length && value != ".") return;
    if (ops.includes(regex[regex.length - 1])) {
      regex[regex.length - 1] = value;
      result.innerHTML = regex.join("");
      return;
    }
  }
  result.innerHTML = regex.join("") + value;
}

const numbers = document.querySelectorAll("#number");
numbers.forEach((e) => {
  e.addEventListener("click", () => {
    addToScreen(e.innerHTML);
  });
});

const operators = document.querySelectorAll("#operator");
operators.forEach((e) => {
  e.addEventListener("click", () => {
    addToScreen(e.innerHTML);
  });
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  const regex = result.innerHTML;
  const expression = regex.replace(/×/g, "*").replace(/÷/g, "/");
  const value = eval(expression);
  result.innerHTML = value;
});

const clr = document.querySelector("#clr");
clr.addEventListener("click", () => {
  result.innerHTML = "";
});

const del = document.querySelector("#del");
del.addEventListener("click", () => {
  const regex = result.innerHTML;
  result.innerHTML = regex.substring(0, regex.length - 1);
});
