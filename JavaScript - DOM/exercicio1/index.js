function addPlayer(){
    let position = document.getElementById("position").value
    let name = document.getElementById("name").value
    let number = document.getElementById("number").value
    
    let confirmation = confirm("Add " + name + " as " + position + "?")

    if(confirmation){
        let teamList = document.getElementById("teamList")
        let player = document.createElement("li")
        player.id = "player" + number
        player.innerText = position + ": " + name + " (" + number + ")"
        teamList.appendChild(player)

        document.getElementById("position").value = ""
        document.getElementById("name").value = ""
        document.getElementById("number").value = ""
    }
}
function removePlayer(){
    let number = document.getElementById("numberToRemove").value
    let playerToRemove = document.getElementById("player" + number)

    let confirmation = confirm("Remove " + playerToRemove.innerText + "?")

    if(confirmation){
        document.getElementById("teamList").removeChild(playerToRemove)

        document.getElementById("numberToRemove").value = ""
    }

    
}
