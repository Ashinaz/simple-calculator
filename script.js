const result = document.querySelector("#calculator-output")

const numbers = document.querySelectorAll(".number.input")
for(let number of numbers) {
  number.addEventListener("click", (e) => {
    if(Number(result.textContent) === user.firstInput){
      result.textContent = ""
    }
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
for(let operator of operators){
  operator.addEventListener("click", e => {
    dotBtn.disabled = false
    if (user.firstInput === 0){
      user.operator = e.target.value
      user.firstInput = Number(result.textContent)
      result.textContent = ""
    }else {
      console.log("Operate used early/acc")
      operate()
      user.operator = e.target.value
    }
  })
}
const backBtn = document.querySelector(".back.input")
backBtn.addEventListener("click", () => {
  result.textContent = result.textContent.slice(0, -1)
})

function clearInput(){
  user = {
    firstInput: 0,
    secondInput: 0,
    operator: "",
  }
}