const testJH = () => 'temp'
export default testJH;

let hello:string = 'world'
// hello = true

const getFUllName = (first: string, last: string): string => {
    return first + ' ' + last
}
getFUllName('test1', 'test2')

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
// =================================================

// =================================================
// Types and Unions (this is like OR for types)
interface I_User2 {
    firstname: string;
    surname: string;
}

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
// 

// =================================================