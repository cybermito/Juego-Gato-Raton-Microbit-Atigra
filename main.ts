radio.onReceivedValue(function (name, value) {
    if (name == "PosXGato") {
        gato.set(LedSpriteProperty.X, value)
    }
    if (name == "PosYGato") {
        gato.set(LedSpriteProperty.Y, value)
    }
    if (name == "MouseX") {
        raton.set(LedSpriteProperty.X, value)
    }
    if (name == "MouseY") {
        raton.set(LedSpriteProperty.Y, value)
    }
})
let raton: game.LedSprite = null
let gato: game.LedSprite = null
radio.setGroup(1)
gato = game.createSprite(2, 2)
raton = game.createSprite(0, 0)
gato.set(LedSpriteProperty.Brightness, 255)
raton.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    basic.pause(100)
    if (input.acceleration(Dimension.X) < -150) {
        gato.change(LedSpriteProperty.X, -1)
        radio.sendValue("PosXGato", gato.get(LedSpriteProperty.X))
    }
    if (input.acceleration(Dimension.X) > 150) {
        gato.change(LedSpriteProperty.X, 1)
        radio.sendValue("PosXGato", gato.get(LedSpriteProperty.X))
    }
    if (input.acceleration(Dimension.Y) < -150) {
        gato.change(LedSpriteProperty.Y, -1)
        radio.sendValue("PosYGato", gato.get(LedSpriteProperty.Y))
    }
    if (input.acceleration(Dimension.Y) > 150) {
        gato.change(LedSpriteProperty.Y, 1)
        radio.sendValue("PosYGato", gato.get(LedSpriteProperty.Y))
    }
})
basic.forever(function () {
    if (gato.isTouching(raton)) {
        radio.sendString("catwin")
        basic.showString("Gato Gana")
    }
})
