export default class User{
    constructor(name, age){
        this.name = name, 
        this.age = age
    }
}

export const printname = async function(user){
    console.log(`user's name is ${user.name}`);
}

export const printage = async function(user){
    console.log(`user's Age is ${user.age}`);
}


// https://stackabuse.com/how-to-use-module-exports-in-node-js/