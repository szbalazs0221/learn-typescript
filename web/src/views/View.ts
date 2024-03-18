import { HasId } from '../models/ApiSync';
import { Callback } from '../models/Eventing';
import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K extends HasId> {
  constructor(protected parent: Element, protected model: T) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  abstract eventsMap(): { [key: string]: Callback };

  abstract template(): string;

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
