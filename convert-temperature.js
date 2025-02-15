function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) +32
    return parseFloat(fahrenheit).toFixed(2)
}

const temp = celsiusToFahrenheit(26)

console.log(temp)

function fahrenheitToCelsius(fahrenheit){
    const celsius = 5/9 * (fahrenheit - 32)
    return celsius
}

const temp2 = fahrenheitToCelsius(77)
console.log(temp2)