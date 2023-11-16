const inputEl = document.getElementById('type')
let lengthEl = document.getElementById('length')
let massEl = document.getElementById('mass')
let volumeEl = document.getElementById('volume')

function valueConvert(){
    let typedText = inputEl.value
    let lengthConvert = `${typedText} meters = ${meterToFeet(typedText)} feet | ${typedText} feet = ${footToMeter(typedText)} meters`
    let volumeConvert = `${typedText} liters = ${litreToGallon(typedText)} gallons | ${typedText} gallons = ${gallonToLitre(typedText)} liters`
    let massConvert = `${typedText} kilos = ${kilogramsToPounds(typedText)} pounds | ${typedText} pounds = ${poundToKilogram(typedText)} kilos`

    lengthEl.textContent = lengthConvert
    massEl.textContent = massConvert
    volumeEl.textContent = volumeConvert
}

function meterToFeet(meter) {
    let converted = meter*3.28084
    return parseFloat(converted.toFixed(3))
}

function footToMeter(feet) {
    let converted = feet*0.3048
    return parseFloat(converted.toFixed(3))
}

function litreToGallon(litre) {
    let converted = litre*0.264172
    return parseFloat(converted.toFixed(3))
}

function gallonToLitre(gallon) {
    let converted = gallon*3.78541
    return parseFloat(converted.toFixed(3))
}

function kilogramsToPounds(kilograms) {
    let converted = kilograms*2.20462
    return parseFloat(converted.toFixed(3))
}

function poundToKilogram(pound) {
    let converted = pound*0.453592
    return parseFloat(converted.toFixed(3))
}
