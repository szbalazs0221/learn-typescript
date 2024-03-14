import { Callback } from '../models/Eventing';
import { User, UserProps } from '../models/User';

export class UserForm {
  constructor(private parent: Element, private userModel: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.userModel.on('change', () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: Callback } {
    return {
      'click:.set-age': this.onSetAgeClick,
    };
  }

  onSetAgeClick = (): void => {
    this.userModel.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>Name: ${this.userModel.get('name')}</div>
        <div>Age: ${this.userModel.get('age')}</div>
        <input />
        <button>Click Me</button>
        <button class='set-age'>Set Random Age</button>
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
