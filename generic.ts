// 제네릭 (Generics)
// 클로져를 이용한 함수
function simpleState(initial: string): [() => string, (v: string) => void] 
{
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [st1getter, st1setter] = simpleState("aaa");
console.log(st1getter());
st1setter("bbb");
console.log(st1getter());

// 제네릭 함수
function simpleState2<T>(initial: T): [() => T, (v: T) => void] 
{
  let str: T = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

const [st2getter, st2setter] = simpleState2(1);
console.log(st2getter());
st2setter(2);
console.log(st2getter());
