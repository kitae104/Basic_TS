function addNumbers(a: number, b: number){
    return a + b;
}

// const 함수 명명
// str2:string = "" 디폴트 파라미터
export const addStrings = (str1:string, str2:string = ""): string => `${str1} ${str2}`;

// 타입 스크립트는 module.exports 방식이 아닌 export default 방식 사용
export default addNumbers;

// union 타입
export const format = (title:string, param:string | number): String =>
    `${title} ${param}`;

// no return 타입 - Void Function
export const printFormat = (title:string, param:string |number) : void =>
    console.log(`${title} ${param}`);

// Promise 리턴
export const fetchData = (url: string ) =>
    Promise.resolve(`Data from ${url}`);

// 함수 파라미터로 ... 스프레드 연산자
export function introduce(greet: string, ...names: string[]): string
{
    return `${greet} ${names.join(" ")}`;
}

// ? 옵셔널 체이닝 - undefined 출력을 방지하기 위해서는 Null 병합 연산자 사용
// 널 병합 연산자 다음에는 기본값 입력 user?.first ?? 'first'
export function getName(user: {first: string, last: string;}): string
{
    return `${user?.first ?? 'first'} ${user?.last ?? 'second'}`;
}