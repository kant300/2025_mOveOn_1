const obj1 = { };
console.log( obj1) ;

const obj2 = { 속성명1 : 10 , "속성명2" : "hello"}
console.log( obj2 ); //(변수명) 전체호출  {속성명1: 10, 속성명2: 'hello'}

console.log( obj2. 속성명1);// .속성명  특정속성의 자료 호출   10

console.log( obj2["속성명2"]); // [ ]*속성명이 특수문자포함 또는 변수일때   hello

console.log( Object.keys( obj2 ) );//객체내 모든 속성명(key)를 배열로 반환  ['속성명1', '속성명2']

console.log( Object.values( obj2 ) ); //객체내 모든 자료(value)를 배열로 반환