interface Person {
    firstName: string;
    lastName: string;
    birthday: Date;
}

class Entry implements Person {
    firstName: string;
    lastName: string;
    birthday: Date;

    constructor(first: string, last: string, month: number, day: number, year: any ){
        this.firstName = first;
        this.lastName = last;
        this.birthday = new Date(month, day, year);
    }
}

const newPerson = new Entry ("Albert", "Einstein", 1879, 4, 14);
console.log(`First Name: ${newPerson.firstName}, Last Name: ${newPerson.lastName}, Birthday: ${newPerson.birthday}`);

let numbers: Array<string> =['twelve','one-hundred','sixteen','forty-four','seventy-three','three-million'];

function sortArray<S>(array: S[]): S[]{
    return array.sort();
}

console.log(`Array before sorting: ${numbers}`);
console.log(`Array after sorting: ${sortArray(numbers)}`);