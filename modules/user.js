export class User{
    constructor(name, age){
        this.name = name, 
        this.age = age
    }
}

const printName = function(user){
    console.log(`user's name is ${user.name}`);
}

const printAge = function(user){
    console.log(`user's Age is ${user.age}`);
}

module.exports = { printName, printAge };

// https://stackabuse.com/how-to-use-module-exports-in-node-js/