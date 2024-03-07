import { User } from './models/user';

const user = new User({ name: 'Adam', age: 23 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'Bela', age: 12 });

console.log(user.get('name'));
console.log(user.get('age'));
