import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';

// const collection = User.buildUserCollection()
// collection.on("change", () => {
//   console.log(collection);
// });
// collection.fetch();
// const user = User.buildUser({ age: 30, name: 'Balazs' });
// const root = document.getElementById('root');
// if (root) {
//   const form = new UserEdit(root, user);
//   form.render();
//   console.log(form);
// } else {
//   throw new Error('Root element not found');
// }

const users = User.buildUserCollection();
users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
