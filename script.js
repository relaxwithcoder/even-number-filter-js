const input = document.getElementById('numInput')
const button = document.getElementById('btn')
const output = document.getElementById('output')

let numbers = []

button.addEventListener("click", () => {
    const value = Number(input.value);

    numbers.push(value)

    const evennumbers = numbers.filter( n => n % 2 === 0);
     
    output.innerText = evennumbers.join(", ")

    input.value = ""

})

const resetbtn = document.getElementById("resetbtn")

resetbtn.addEventListener("click", () => {
    numbers=[];
    output.innerText="";
});
