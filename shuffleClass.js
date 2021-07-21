"use strict";
function shuffleClass(students, numToMove) {
    if (numToMove === 0) {
        return students;
    }
    let finalArray = [];
    const length = students.length;
    students.forEach((student, index) => {
        let newIndex = index + numToMove;
        if (newIndex >= length) {
            let newestIndex = newIndex % length;
            finalArray[newestIndex] = student;
        }
        else {
            finalArray[newIndex] = student;
        }
    });
    return finalArray;
}
console.log(shuffleClass([7, 8, 0], 1));
console.log(shuffleClass([1, 2, 3, 4, 5, 6, 7], 3));
