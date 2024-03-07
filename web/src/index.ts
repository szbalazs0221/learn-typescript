import { User } from './models/user';

const user = new User({ name: 'Adam', age: 23 });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('click', () => {
  console.log('Change click');
});
user.on('click', () => {
  console.log('Change click again');
});
user.on('change', () => {
  console.log('Haliho');
});

user.trigger('click');
user.trigger('change');
