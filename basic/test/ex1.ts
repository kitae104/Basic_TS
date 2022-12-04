let userName: string = "squid";
let userLoggedIn: boolean = true;
let myValue: number = 10;
let myRegex: RegExp = /foo/;
const names: string[] = userName.split(" ");
const names2: Array<string> = userName.split("");

const myShow: {
    first: string;
    second: string;
} = {
    first: "squid",
    second: "name"
}

// 인터페이스
interface ShowPropos {
    first: string;
    second: string;
}

const myShow2: ShowPropos = {
    first: "squid",
    second: "game"
}

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c";

for(let i = 0; i<10; i++){
    console.log(i);
}

[1,2,3].forEach(v => console.log(v));

const returnValue = [4, 5, 6].map(v => v * 10);
console.log(returnValue);

const returnValue2 = [7, 8, 9].map(v => `${v * 10}`);
console.log(returnValue2);

userName += " game";

console.log(userName);