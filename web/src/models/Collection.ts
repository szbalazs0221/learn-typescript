import { Eventing } from './Eventing';
import { User, UserProps } from './user';
import axios, { AxiosResponse } from 'axios';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((userData: UserProps) => {
        this.models.push(User.buildUser(userData));
      });

      this.trigger('change');
    });
  }
}
