let { id, name } = { id: 123, name:"gogo" };
console.log(id) // 123
console.log(name) // gogo

var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

// 중첩된 객체의 구조 분해
let metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

let { title: englishTitle, translations: [{ title: localeTitle, url: url2 }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
console.log(url2);

// for of 반복문과 구조 분해
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name: n, family: { father: f } } of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// 디스트럭처링 매개변수 선언
function profile( obj ){
  var name="";
  name=(obj.name !==undefined )? obj.name : "none" ;
  console.log(name);
}

profile( {name: "boy"} ); 

// 속성 검사를 간단하게 처리하기 
function profile2( {name, job="?"}={name:"none"} ){
  console.log( name, job ) // "gogo"
}
profile2( {name: "boy"} ); 

// 함수 매개변수로 전달된 객체로부터 분해하기
// 각 객체로부터속성들을 해체해 출력한다.
const checkItems = [
  { id: 1, check: true },
  { id: 2, check: false },
  { id: 3, check: false }
];

console.log(checkItems.pop());

// checkItems 배열의 요소인 객체로부터 check 프로퍼티만을 추출하여 true인것을 리턴.
const checkItemView = checkItems.filter(({check})=> check);
console.log(checkItemView);

function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

let user = {
  id: 30, 
  displayName: "test",
  fullName: {
    firstName: "Gildong",
    lastName: 'Hong',
  },
};

console.log("userId : " + userId(user));
whois(user);