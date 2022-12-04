var userName = "squid";
var userLoggedIn = true;
var myValue = 10;
var myRegex = /foo/;
var names = userName.split(" ");
var names2 = userName.split("");
var myShow = {
    first: "squid",
    second: "name"
};
var myShow2 = {
    first: "squid",
    second: "game"
};
var ids = {
    10: "a",
    20: "b"
};
ids[30] = "c";
for (var i = 0; i < 10; i++) {
    console.log(i);
}
[1, 2, 3].forEach(function (v) { return console.log(v); });
var returnValue = [4, 5, 6].map(function (v) { return v * 10; });
console.log(returnValue);
var returnValue2 = [7, 8, 9].map(function (v) { return "".concat(v * 10); });
console.log(returnValue2);
userName += " game";
console.log(userName);
