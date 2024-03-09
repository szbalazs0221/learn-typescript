import { User } from './models/user';

const user = new User({ id: 1 });
user.set({ age: 15, name: 'Eric' });
const userTwo = new User({ name: 'Balazs', age: 30 });
user.save();
userTwo.save();
user.fetch();
userTwo.fetch();

setTimeout(() => {
  console.log(user);
  console.log(userTwo);
}, 4000);
