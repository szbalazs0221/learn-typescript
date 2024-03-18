import { Callback } from '../models/Eventing';
import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: Callback } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-user': this.onSaveUserClick,
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

  onSaveUserClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <div style="padding-bottom: 10px;">
          <input class='input-name' type="text" style="width: 50px; margin-right: 5px;" placeholder=${this.model.get(
            'name'
          )}>
          <button class='set-name'>Update Name</button>
        </div>
        <div style="padding-bottom: 5px;"><button class='set-age'>Set Random Age</button></div>
        <div style="padding-bottom: 5px;"><button class='save-user'>Save</button></div>
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
