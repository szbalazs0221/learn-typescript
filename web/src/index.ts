import { User } from './models/User';
import { UserForm } from './views/UserForm';

// const collection = User.buildUserCollection()
// collection.on("change", () => {
//   console.log(collection);
// });
// collection.fetch();
const user = User.buildUser({ age: 30, name: 'Balazs' });
const root = document.getElementById('root');
if (root) {
  const form = new UserForm(root, user);
  form.render();
} else {
  throw new Error('Root element not found');
}
