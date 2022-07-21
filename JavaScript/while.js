let shipName = ""
let entry = "1"
let entryNumber = 0
let entryCount = 0

shipName = prompt("Qual o nome da nave?")

entry = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

if (entry == "1") {
    entryNumber = 1
}

while (entry == "1") {
    entry = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
    entryNumber += 1
}

if (entryNumber >= 2) {
    entryNumber = entryNumber - 1
}

entryCount = entryNumber 

alert("Nome da nave: " + shipName + "\nQuantidade de dobras realizadas: " + entryCount)
    