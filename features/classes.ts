class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  protected honk(): void {
    console.log('honk honk');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
console.log(car.color);
car.startDrivingProcess();
