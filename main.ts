let Moisture_Level = 0
serial.redirectToUSB()
let Threshold = 500
basic.showIcon(IconNames.Yes)
loops.everyInterval(500, function () {
    Moisture_Level = pins.analogReadPin(AnalogPin.P1)
    serial.writeLine("" + (Moisture_Level))
    if (Moisture_Level > Threshold) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
	
})
