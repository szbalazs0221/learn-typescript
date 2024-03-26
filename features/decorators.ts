@classDecorator
class Boat {
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops, boat was sunk in ocean')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('not moving');
    }
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

function classDecorator(constructor: typeof Boat) {
  console.log(`Class decorator: ${constructor}`);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(`Parameter decorator: ${key}, ${index}`);
}

function testDecorator(target: any, key: string): void {
  console.log('Test decorator:');
  console.log(target);
  console.log(key);
}

new Boat().pilot('fast');
