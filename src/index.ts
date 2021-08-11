const testJH = () => 'temp'

let hello:string = 'world'
// hello = true

const getFUllName = (first: string, last: string): string => {
    return first + ' ' + last
}
getFUllName('test1', 'test2')

// =================================================
interface User {
    name: string;
    age?: number;
}

const user: User = {
    name: 'john',
    age: 21
}

const user2: User = {
    name: 'john',
}
// =================================================

export default testJH;