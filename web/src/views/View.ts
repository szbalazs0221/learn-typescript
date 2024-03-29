import { HasId } from '../models/ApiSync';
import { Callback } from '../models/Eventing';
import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K extends HasId> {
  regions: { [key: string]: Element } = {};

  constructor(protected parent: Element, protected model: T) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: Callback } {
    return {};
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

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let regionKey in regionsMap) {
      const selector = regionsMap[regionKey];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[regionKey] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();
    this.parent.append(templateElement.content);
  }
}
