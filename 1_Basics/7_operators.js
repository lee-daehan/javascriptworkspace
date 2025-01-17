/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('------------------');

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 * 
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);
console.log('--------------');
/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

/*
증감연산자가 뒤에 있으면 다른 오퍼레이터를 먼저 실행하고
증감연산자를 실행함 
따라서 기존 number값이 먼저 result에 저장된 후에 number값은 증가한다.
*/
result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
console.log(+sample); //NaN -> Not a Number

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

// === 타입까지 비교
console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log('-------------');

console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log('-------------');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log('-------------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */

//&& 조건은 모두 true 여야 true 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('-------------');

// ||는 하나만 ture여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('-------------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);
console.log('-------------');

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

/**
 * 단축평가 (short circuit evaluation)
 * 외우는 영역
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log('-------------');

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');
console.log('-------------');

console.log(true && true && '아이브'); //아이브
console.log(true && false && '아이브'); //false
console.log(true || true || '아이브'); //true
console.log(true || false || '아이브'); //true

/**
 * 지수 연산자
 */
console.log('-------------');

console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */
let name;
console.log(name);

// ?? : 좌측값이 null이거나 undefined일때 우측값을 반환한다.
name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name);
