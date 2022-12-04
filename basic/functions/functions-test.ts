// addStrings 함수는 export default로 export 가 된 게 아니라서 디스트럭쳐 방식으로 import
import addNumbers, {addStrings, format, fetchData, introduce, getName} from './functions';

console.log(addNumbers(1, 2));
// console.log(addNumbers(1, "test"));   // 타입 오류 발생

console.log(addStrings("test", "typescript"));
console.log(addStrings("test1"));    // 오류 발생을 디폴트 파라미터로 해결

console.log(format("title", 123));

console.log(fetchData("http://www.naver.com"));

console.log(introduce("Hello", "AA", "BB", "CC", "DD"));

console.log(getName({first: "kim", last: "ki tae"}));