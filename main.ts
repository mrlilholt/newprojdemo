controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(50, 50)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 . . 3 3 3 . . . . 
    . . . . . 3 . 3 3 3 3 3 . . . . 
    . . . . . . 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 . . 3 3 . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
