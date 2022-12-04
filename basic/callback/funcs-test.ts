import {arrayMutate, myMutationFunc, createAddr} from "./funcs-with-funcs";

console.log(arrayMutate([1,2,3], (v) => v * 10));

console.log(myMutationFunc(5));

const addOne = createAddr(1);
console.log('클로저 :', addOne(55));