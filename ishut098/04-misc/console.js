console.log('log method');
var john={
    name:'John',
    age: 32,
    contacts:[
        'john.doe@example.com',
        'john.doe@gmail.com',
    ]
};

console.log(john);
console.dir(john);
console.dir(john,{depth:0});
console.dir(john,{depth:1});


// log method
// { name: 'John',
//   age: 32,
//   contacts: [ 'john.doe@example.com', 'john.doe@gmail.com' ] }
// { name: 'John',
//   age: 32,
//   contacts: [ 'john.doe@example.com', 'john.doe@gmail.com' ] }
// { name: 'John', age: 32, contacts: [Array] }
// { name: 'John',
//   age: 32,
//   contacts: [ 'john.doe@example.com', 'john.doe@gmail.com' ] }