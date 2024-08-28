// function overloading
// đối với ts -> có thể khai báo function với tên giống nhau
// khi khai báo tên giống nhau thì phải cộng gộp lại
// có 1 hàm tổng để cộng gộp lại và cần có keyword return

function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}

// 2 functions làm nhiệm vụ tương tự nhau 
// -> có thể gồm thành 1 với union type

function add111(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}

// overloading

// Định nghĩa các hàm có tên giống nhau -> overloading
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
    return a + b;
}
// console.log("check: ", addNew(6, 9), addNew(" Liti", " & Mini"))


class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            return values;
        }
        return ++this.current;
    }
}

let counter111 = new Counter();

console.log(counter111.count()); // return a number
console.log(counter111.count(20)); // return an array

// Compile-time Polymorphism (Method Overloading)
class MathOperations {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}
const math = new MathOperations();
console.log(math.add(5, 10)); 
// Output: 15 (number addition)
console.log(math.add("Hello, ", "World!")); 
// Output: "Hello, World!" (string concatenation)

// Run-time Polymorphism (Method Overriding)
class Animal {
  Sound() { console.log("Some generic sound"); }
}
class Dog extends Animal {
  makeSound() { console.log("Woofff"); }
}
class Cat extends Animal {
  makeSound() { console.log("Meoww"); }
}
function animalSound(animal: Animal) {
  animal.Sound();
}
const dog = new Dog();
const cat = new Cat();
animalSound(dog); // Output: "Woof!" (Dog's sound)
animalSound(cat); // Output: "Meow!" (Cat's sound)
