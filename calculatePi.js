"use strict";
function calculatePi(num) {
    let coordinates = [];
    let inside_the_circle = 0;
    let outside_the_circle = 0;
    let pi;
    for (let index = 0; index < num; index++) {
        let x = Math.random();
        let y = Math.random();
        coordinates.push({ x, y });
    }
    coordinates.forEach((point) => {
        let { x, y } = point;
        let distance = Math.sqrt((x * x) + (y * y));
        if (distance < 1) {
            inside_the_circle++;
        }
        else {
            outside_the_circle++;
        }
    });
    pi = (4 * inside_the_circle) / outside_the_circle;
    return pi;
}
console.log(calculatePi(3));
console.log(calculatePi(10));
