class Person2 {
    private _age: number; // biến chỉ có thể truy cập bên trong class
    public firstName: string;
    public lastName: string;
    constructor(_age: number, firstName: string, lastName: string) {
        this._age = _age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //getter
    get age() {
        return this._age;
    }
    //setter
    set age(age2: number) {
        if (age2 < 0 || age2 > 150) {
            throw Error("Invalid age")
        }
        this._age = age2;
    }
}

let person2 = new Person2(25, 'Liti', 'Mini');
let checkAge = person2.age; //getter
// person2.age = 69 // setter
// person2.setAge(69) //setter

console.log(">>> check age: ", person2) //getter
// person2.age = 26;