let spaceshipVelocity = 150

function slowDown(velocity, printer) {
    let deceleration = 20
    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }
    alert("Nave parada. As comportas podem ser abertas.")
}

slowDown(spaceshipVelocity, function(velocity) {
    console.log("Velocidade atual: " + velocity)
})