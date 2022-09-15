basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showIcon(IconNames.Skull)
    basic.showString("LETSS GOOO ;)")
    music.playMelody("E A D G B F C5 C ", 185)
})
