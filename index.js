"use strict";
var Entry = /** @class */ (function () {
    function Entry(first, last, month, day, year) {
        this.firstName = first;
        this.lastName = last;
        this.birthday = new Date(month, day, year);
    }
    return Entry;
}());
var newPerson = new Entry("Albert", "Einstein", 1879, 4, 14);
console.log("First Name: " + newPerson.firstName + ", Last Name: " + newPerson.lastName + ", Birthday: " + newPerson.birthday);
var numbers = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];
function sortArray(array) {
    return array.sort();
}
console.log("Array before sorting: " + numbers);
console.log("Array after sorting: " + sortArray(numbers));
