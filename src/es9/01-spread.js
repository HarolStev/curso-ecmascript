const user = { username: 'hsgq', age: 35, country: 'CA'};
const {username, ...value} = user;

console.log(username);
console.log(value);