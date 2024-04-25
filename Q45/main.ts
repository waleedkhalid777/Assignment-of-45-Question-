//define a function to create a car
function create_car(manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    // add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

//call the function to create a car
let my_car = create_car("Toyota", "corrolla", "color: black", "sunroof: True", "Year: 2024");

//print the work 
console.log(my_car);