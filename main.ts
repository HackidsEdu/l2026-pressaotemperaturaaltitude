HackbitOLEDDisplay.init(128, 64)
HackbitOLEDDisplay.writeStringNewLine("hack:bit")
HackbitOLEDDisplay.writeStringNewLine("Estacao Metereologica")
basic.pause(3000)
basic.forever(function () {
    hackbit.queryData(
    hackbit.DHTtype.DHT11,
    DigitalPin.P13,
    true,
    false,
    true
    )
})
basic.forever(function () {
    if (hackbit.readDataSuccessful()) {
        HackbitOLEDDisplay.clear()
        HackbitOLEDDisplay.writeStringNewLine("hack:bit")
        HackbitOLEDDisplay.writeStringNewLine("Estacao Metereologica")
        HackbitOLEDDisplay.writeString("Umid.:")
        HackbitOLEDDisplay.writeNumNewLine(hackbit.readData(hackbit.dataType.humidity))
        HackbitOLEDDisplay.writeString("Temp.: ")
        HackbitOLEDDisplay.writeNumNewLine(hackbit.getTemperatureDecimal())
        HackbitOLEDDisplay.writeString("Press:")
        HackbitOLEDDisplay.writeNumNewLine(hackbit.getPressureDecimal())
        HackbitOLEDDisplay.writeString("Altit:")
        HackbitOLEDDisplay.writeNumNewLine(hackbit.getAltitudeDecimal(101325))
        HackbitOLEDDisplay.writeString("Altur:")
        HackbitOLEDDisplay.writeNumNewLine(Math.round(hackbit.getAltitudeDecimal(101325) - 610))
        basic.pause(5000)
    }
})
