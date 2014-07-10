/*global prompt:true */

var dog = {};

dog.name = 'fido';
dog.age = 3;
dog.gender = 'male';
dog.breed = 'labrador';

console.log(dog);
//prompt user for name, age & breed of dog
var dog2 = {name:'sam', age:4};

console.log(dog2);
var prompt = require('sync-prompt').prompt;

var name = prompt('dog name: ');
var age = prompt('dog age: ');
var breed = prompt('dog breed: ');

age = parseInt(age);

var dog3 = {name:name, age:age, breed:breed};

console.log(dog3);

//prompt user to create a dog(s)
var question = prompt('Do you want to create a dog? y or n');

var dogs = [];

while(question !== 'n'){
  name = prompt ('name: ');
  age = prompt ('age: ');
  age = parseInt(age);
  var gender = prompt ('gender: ');
  dog = {name:name, age:age, gender:gender};
  dogs.push(dog);
  question = prompt('Do you want to create a dog? y or n');
}
console.log(dogs);



