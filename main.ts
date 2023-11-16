input.onGesture(Gesture.EightG, function () {
    basic.showString("AUW")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
})
basic.showString("HOI")
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
