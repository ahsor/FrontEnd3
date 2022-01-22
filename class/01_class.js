'use strict';

class Person1{}

const Person2 = class{}
const person3 = class MyClass{}

class Person4{
    constructor(name, age){
        this.name = name; 
        this.age = age; 
    }
}

console.log( new Person1());
console.log( new Person2());
console.log( Person2);
console.log( person3);
console.log( new Person4('kin', 30));

const Person = '';

{
  // 호이스팅이 발생하지 않는다면 ''이 출력되어야 한다.
  console.log(Person);
  // ReferenceError: Cannot access 'Person' before initialization

  // 클래스 선언문
  class Person {}
}