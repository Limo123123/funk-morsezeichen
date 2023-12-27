let zahl = 0
radio.onReceivedNumber(function (receivedNumber) {
    zahl = receivedNumber
    if (zahl == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        music.playTone(440, music.beat(BeatFraction.Half))
        basic.pause(1000)
    } else if (zahl == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        music.playTone(440, music.beat(BeatFraction.Half))
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    radio.sendNumber(0)
    music.playTone(262, music.beat(BeatFraction.Half))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    radio.sendNumber(1)
    music.playTone(330, music.beat(BeatFraction.Half))
})
basic.forever(function () {
    radio.setGroup(100)
    radio.setTransmitPower(7)
})
