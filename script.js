const result = document.querySelector("#calculator-output")

const numbers = document.querySelectorAll(".number.input")
for(let number of numbers) {
  number.addEventListener("click", (e) => {
    result.textContent += e.target.value
  })
}

const clear = document.querySelector(".clear.input")
clear.addEventListener("click", () => {result.textContent = ""})

const mathOperation = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
}