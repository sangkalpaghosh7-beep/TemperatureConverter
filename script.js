let inp_celsius = document.querySelector("#inp-celsius");
let inp_fahrenheit = document.querySelector("#inp-fahrenheit");
let inp_kelvin = document.querySelector("#inp-kelvin");

function computeTemp(event){
    const currentValue = +event.target.value;


    switch(event.target.name){
        case "inp-celsius":
            inp_kelvin.value = (currentValue + 273.15).toFixed(2);
            inp_fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case "inp-fahrenheit":
            inp_celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
            inp_kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "inp-kelvin":
            inp_celsius.value = (currentValue - 273.15).toFixed(2);
            inp_fahrenheit.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
            break;
        default:
        break;
    }
}