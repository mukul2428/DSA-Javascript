let car = {
    color: "red",
    brand: "maruti"
}
let carClone = {...car};

carClone.color = "blue";
console.log(carClone, car);