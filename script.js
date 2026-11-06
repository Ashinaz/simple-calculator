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

let user = {
  firstInput: 0,
  secondInput: 0,
  operator: "",
}

const equal = document.querySelector(".equal.input")
equal.addEventListener("click", operate)

const clearBtn = document.querySelector(".clear.input")
clearBtn.addEventListener("click", clearInput)

const dotBtn = document.querySelector(".dot.input")
dotBtn.addEventListener("click", e => {
  dotBtn.disabled = true
  result.textContent += "."
})

const operators = document.querySelectorAll(".operator.input")