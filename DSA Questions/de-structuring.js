const car = {
    color: "red",
    model: "tata",
    month: "april"
}
// const color = car.color;
// const model = car.model;
// const month = car.month;

//using de-structuring

const {color, model, month} = car;

//here variable name and object's key should be of same name and their position should also be same
console.log(color, model, month);