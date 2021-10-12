radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("y", receivedNumber)
})
radio.setGroup(33)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # .
    # # # # .
    . # . # .
    `)
basic.pause(5000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
