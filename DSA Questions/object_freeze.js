const car = {
    "name": "Tata",
    "color": "red"
}
Object.freeze(car);
car.name = "Toyota";
console.log(car);