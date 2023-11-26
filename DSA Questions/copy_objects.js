//copying object in javascipt

//using spread operator
const obj1 = {name: "Viral", age: 22};
const obj2 = {...obj1};

//using shallow copy
const obj3 = Object.assign({}, obj1);

//using deep clone
const obj4 = JSON.parse(JSON.stringify(obj1));

//using lodash

const _ = require('lodash');
const obj5 = _.cloneDeep(obj1);