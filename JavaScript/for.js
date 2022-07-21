let chosenChar = ""
let spaceship = ""
let newChar = ""
let newSpaceship = ""

spaceship = prompt("Digite o nome da Espaçonave")

chosenChar = prompt("Digite o Caractére que você deseja substituir")

newChar = prompt("Digite o Caractére que substituirá o antigo:")

for(let x = 0; x < spaceship.length; x++) {
    if(spaceship[x] == chosenChar) {
        newSpaceship += newChar
    }
    else {
        newSpaceship += spaceship[x]
    }
}

alert("O novo nome da nave é " + newSpaceship + ".") 