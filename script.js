let entry = Number(prompt("Tente adivinhar o núemro que estou pensando de 1 até 10."))
let drawn =  Math.round(Math.random() * 10)

let time = 1

while(entry != drawn) {
    entry = prompt(`Erro, tente novamente.`)
    time++
}

alert(`Parabéns, você acertou o número na ${time}ª tentativa.`)