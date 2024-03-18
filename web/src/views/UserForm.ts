import { Callback } from '../models/Eventing';
import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: Callback } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>Name: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
        <div>
          <input class='input-name' type="text" value=${this.model.get('name')}>
          <button class='set-name'>Update Name</button>
        </div>
        <div>
          <button class='set-age'>Set Random Age</button>
        <div>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, elementSelector] = eventKey.split(':');
      const htmlElements = fragment.querySelectorAll(elementSelector);
      htmlElements.forEach((htmlElement) => {
        htmlElement.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
