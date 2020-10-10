radio.onReceivedNumber(function (receivedNumber) {
    deg = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    deg += -5
})
input.onButtonPressed(Button.AB, function () {
    deg = 90
})
input.onButtonPressed(Button.B, function () {
    deg += 5
})
let deg = 0
radio.setGroup(1)
Servo.Servo(0, 90)
basic.showIcon(IconNames.Heart)
deg = 90
basic.forever(function () {
    led.plotBarGraph(
    deg,
    180
    )
    basic.pause(100)
    Servo.Servo(0, deg)
})
