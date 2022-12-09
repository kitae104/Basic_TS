// 튜플은 배열의 각 항목의 타입을 미리 지정
let role:[String, String, Number] = ["admin", "manager", 40];

let employee: [number, string, number] = [101, "test", 5000];
console.log(employee);

employee.push(100);
console.log(employee);

type ThreeDCoordinate = [x:number, y:number, z:number];

function add3DCoordinate(c1:ThreeDCoordinate, c2: ThreeDCoordinate):ThreeDCoordinate
{
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2],
    ]
}

console.log(add3DCoordinate([1,2,3], [4,5,6]));

// 튜플안에 함수가 있는 경우 - 2개의 함수를 리턴할 때 2개의 함수를 리턴
function simpleState(initial: string): [() => string, (v:string) => void]
{
    let str: string = initial;
    return [
        () => str,
        (v: string) => {
            str = v;
        }
    ]
}

// 디스트럭쳐 링 방식으로 리턴된 함수를 각각 get1, set1에 할당
const [get1, set1] = simpleState("Hello");

console.log(get1());
set1("World");
console.log(get1());
