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