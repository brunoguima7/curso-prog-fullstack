let spaceshipName = ""

let invertedName = ""

spaceshipName = prompt("Qual o nome da nave?")

for(let i = spaceshipName.length - 1; i >= 0; i--) {
    if(spaceshipName[i] == e){
        break
    }
    invertedName += spaceshipName[i]
}
alert("Nome original: " + spaceshipName + "\nNome após ocultação: " + invertedName)