/**
 * Hoisting
 */
console.log("Hello");
console.log("World");
console.log('------------');

// console.log(name);
// var name = '코드팩토리';
// console.log(name);

/**
 * Hoisting은 무어쇼인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

/**
 * var은 호이스팅을 막아주지 못하지만
 * let과 const는 변수를 선언하고 값이 초기화 되기 전에
 * 값을 미리 가져오는 버그를 방지할수 있음
 * var보단 let, const를 쓰라는 이유중 하나이다.
 */
console.log(yuJin);
const yuJin = '안유진';

