import {printIngredient, getEmail} from './optional'

printIngredient("1C", "Test");

printIngredient("1C", "Sugar", "Something Else");

console.log('결과', getEmail({id: "1", info:{}}));