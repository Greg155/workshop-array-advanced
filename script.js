/// recreer foreach, map, reduce, filter

///////////////////////////////////  For each ///////////////////////

const foods = ["apple","pear","cerise"];

const greeting = (name) => console.log(`Hello, ${name}`);

//// JS6
const forEachManualFat = (myArray, cbf) => {

    for(let i = 0; i<myArray.length; i++){
      cbf(myArray[i]);
    }
};

forEachManualFat(foods,greeting);

////////////////////////////////////// MAP ///////////////////////////////////////
const numbers = [1,2,3,4];

const myDouble = (variable) => {variable*2};

fctMapFat = (element,cbf ) => {
    const arrayTemp = [];
    for(let i =0; i<element.length; i++){
        console.log(element[i]);
        arrayTemp[i] = cbf(element[i]);
    }
    return arrayTemp;
}

const newNumbersFat = fctMapFat(numbers,myDouble);
console.log("Map JS6 = " + newNumbersFat);

// //////////////////////  Filter ///////////////

// const animals = [
//     {   
//         name : "James",
//         species : "Felix",
//         nbFeet : 4,
//         food : "meat"
//     },
//     {   
//         name : "Medor",
//         species : "Canis",
//         nbFeet : 4,
//         food : "meat"
//     },
//     {   
//         name : "Bob",
//         species : "Pisces",
//         nbFeet : 0,
//         food : "worm"
//     },
//     {   
//         name : "Maou",
//         species : "Felix",
//         nbFeet : 4,
//         food : "meat"
//     },
// ]


// /////// JS6
// isFelixFat = ( (element) => {
//     const newAnimals = [];
//     let j = 0;
//     for(let i = 0; i<element.length; i++){
//         if(element[i].species === "Felix"){
//             newAnimals[j] = element[i];
//             j++;
//         }
//     }
//     return newAnimals;
// })

// const animalFelix = isFelix(animals);
// console.log(animalFelix);
// const animalFelixFat = isFelixFat(animals);
// console.log(animalFelixFat);