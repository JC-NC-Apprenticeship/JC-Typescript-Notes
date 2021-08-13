const testJH = () => 'temp'
export default testJH;

// =================================================
// Basic APplications of TS

let hello:string = 'world'
// hello = true

const getFUllName = (first: string, last: string): string => {
    return first + ' ' + last
}
getFUllName('test1', 'test2')
// =================================================

// =================================================
// TS Types
https://www.oreilly.com/library/view/programming-typescript/9781492037644/assets/prts_0301.png

// Primitive Types
- Any
- String
- Number
- Boolean
- Enum
- void
- Null
- Undefined

// Object Types
- Never
- Array
- Object
- Tuple
- Function
- Constructor

// =================================================

// =================================================
// interface
// You should prefix the naming of interface so they do not class with 'classes'
interface I_User {
    name: string;
    age?: number;
}

const user: I_User = {
    name: 'john',
    age: 21
}

const user1: I_User = {
    name: 'jack',
}

interface I_User2 {
    firstname: string;
    surname: string;
}
// =================================================

// =================================================
// Types and Unions (this is like OR for types)

let username: string = 'john'

let pageNumber: string | number = 1

let errorMessage: string | null = null

let user2: I_User2 | null = null

// =================================================

// =================================================
// Customer/Alias Types
type PopularType = string

const stringOfText: PopularType = 'text'

// =================================================

// =================================================
// void = undefined and null
    // only used when you want to say we DON'T return something from the function

// never = functin that never ends so should throw never

// unknown = Can assign unknown to any other types

// type assertion = forces a replace of type using 'as' i.e. (PopularType as unknown) as number
// =================================================

// =================================================
// Classes
// This can have the following:
    // You can set elements of the class as follows:
        // - Public - This is the default and is accessible inside and outside of the class.
        // - Private - Can only access in the class.
        // - Protected - like private but access in children classes.
        // - readonly - it is un mutable so cannot be changed.
class Greeter {
    // this is removed because set to private
    // message: string;
   
    constructor(private message: string) {
      this.message = message;
    }
   
    greet() {
      return "Hello, " + this.message;
    }
  }

// to create a new class
const newGreeter = new Greeter('hello')

// Inheritance
// This is where you want to share the properties of the parent with a child.  Use the keyword extends and will need super() in the constructor:
class Welcomer extends Greeter {
    constructor () {
        super('Hello')
    }
}
// =================================================

// =================================================
// Interface
// This is a lot like type to create structure and often used with classes:

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
  }
   
  class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
      this.currentTime = d;
    }
    constructor(h: number, m: number) {}
  }
  // =================================================

  // =================================================
  // Types

  type Person = {
    name: string;
    age: number;
  };
   
  function greet(person: Person) {
    return "Hello " + person.name;
  }

  OR
  
  type ClockType = {
    currentTime: Date;
  }
   
  class Clock2 extends ClockType {
    currentTime: Date = new Date();
    constructor(h: number, m: number) {}
  }
  // =================================================

  // =================================================
  // Generics
  // the type relates to what is past in i.e. if put in 'hello' it will be string

  function identity<T>(arg: T): T {
    return arg;
  }

  class Animal {
    numLegs: number = 4;
  }

  function createInstance<T extends Animal>(c: new () => T): T {
    return new c();
  }
  
  // =================================================