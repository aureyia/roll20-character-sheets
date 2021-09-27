// tests various features to tell which version of ecmascript is available when r20 parses worker scripts

function es2016() {
return 2 ** 3 === 8 && -(5 ** 2) === -25 && (-5) ** 2 === 25;
};

function es2017(){
return 'hello'.padStart(10) === '     hello'
&& 'hello'.padStart(10, '1234') === '12341hello'
&& 'hello'.padStart() === 'hello'
&& 'hello'.padStart(6, '123') === '1hello'
&& 'hello'.padStart(3) === 'hello'
&& 'hello'.padStart(3, '123') === 'hello';
};

function es2018() {
var spread = {b: 2, c: 3};
var O = { a: 1, ...spread };
return O !== spread && (O.a + O.b + O.c) === 6;
};

function es2019() {
var object = Object.fromEntries(new Map([['foo', 42], ['bar', 23]]));
return object.foo === 42 && object.bar === 23;
}

function es2020() {
if (typeof String.prototype.matchAll !== 'function') return false;
try {
'11a2bb'.matchAll(/(\d)(\D)/);
} catch (e) {
return true;
}
}

function es2021() {
return 'q=query+string+parameters'.replaceAll('+', ' ') === 'q=query string parameters';
}

function es2022(){
class C {
#x = 42;
x(o = this){
return o?.#x;
}
}
return new C().x() === 42 && new C().x(null) === void 0;
}

on("sheet:open", () => {
console.log("[Ironworker] EcmaScript 2016:", es2016());
console.log("[Ironworker] EcmaScript 2017:", es2017());
console.log("[Ironworker] EcmaScript 2018:", es2018());
console.log("[Ironworker] EcmaScript 2019:", es2019());
console.log("[Ironworker] EcmaScript 2020:", es2020());
console.log("[Ironworker] EcmaScript 2021:", es2021());
console.log("[Ironworker] EcmaScript 2022:", es2022());
});
