import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

// const collection = User.buildUserCollection()
// collection.on("change", () => {
//   console.log(collection);
// });
// collection.fetch();

const form = new UserForm(document.getElementById('root') as Element);
form.render()
