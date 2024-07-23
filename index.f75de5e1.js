"use strict";
const populations = document.querySelectorAll(".population");
const totalPopulation = document.querySelector(".total-population");
const averagePopulation = document.querySelector(".average-population");
const arrPopulation = [];
let sum = 0;
for (const x of populations){
    const str = x.textContent;
    const result = +str.replaceAll(",", "");
    arrPopulation.push(result);
}
for (const population of arrPopulation)sum += population;
const average = sum / arrPopulation.length;
const formatedSum = sum.toLocaleString("en-US");
const formatedAvarage = average.toLocaleString("en-US");
totalPopulation.textContent = formatedSum;
averagePopulation.textContent = formatedAvarage;

//# sourceMappingURL=index.f75de5e1.js.map
