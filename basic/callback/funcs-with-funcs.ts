// 콜백 함수의 타입은 화살표 함수를 이용 
export function printToFile(text: string, callback: () => void ): void 
{
  console.log(text);  
  callback();
}

// 함수 타입 정의 - 타입 키워드는 = 사용 
export type MutateFunction = (v: number) => number;

// 배열을 바꾸는 함수
export function arrayMutate(numbers: number[], mutate: MutateFunction) : number[]
{
  return numbers.map(mutate);
}

export const myMutationFunc: MutateFunction = (v: number) => v * 10;

// 클로저
export type AddrFunction = (val: number) => number;
export function createAddr(num: number):AddrFunction 
{
  return (val: number) => num + val;
}