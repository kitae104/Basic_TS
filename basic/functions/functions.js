"use strict";
exports.__esModule = true;
exports.getName = exports.introduce = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
// const 함수 명명
// str2:string = "" 디폴트 파라미터
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
// 타입 스크립트는 module.exports 방식이 아닌 export default 방식 사용
exports["default"] = addNumbers;
// union 타입
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// no return 타입 - Void Function
var printFormat = function (title, param) {
    return console.log("".concat(title, " ").concat(param));
};
exports.printFormat = printFormat;
// Promise 리턴
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// 함수 파라미터로 ... 스프레드 연산자
function introduce(greet) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(greet, " ").concat(names.join(" "));
}
exports.introduce = introduce;
// ? 옵셔널 체이닝 - undefined 출력을 방지하기 위해서는 Null 병합 연산자 사용
// 널 병합 연산자 다음에는 기본값 입력 user?.first ?? 'first'
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first', " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'second');
}
exports.getName = getName;
