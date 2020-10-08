/// recreer foreach, map, reduce, filter

///////////////////////////////////  For each ///////////////////////

// const foods = ["apple","pear","cerise"];

// const greeting = (name) => console.log(`Hello, ${name}`);

// //// JS6
// const forEachManualFat = (myArray, cbf) => {

//     for(let i = 0; i<myArray.length; i++){
//       cbf(myArray[i]);
//     }
// };

// forEachManualFat(foods,greeting);

////////////////////////////////////// MAP ///////////////////////////////////////
// const numbers = [1,2,3,4];

// const myDouble = (variable) => variable*2;

// fctMapFat = (element,cbf ) => {
//     const arrayTemp = [];
//     for(let i =0; i<element.length; i++){
//         console.log(element[i]);
//         arrayTemp[i] = cbf(element[i]);
//     }
//     return arrayTemp;
// }

// const newNumbersFat = fctMapFat(numbers,myDouble);
// console.log("Map JS6 = " + newNumbersFat);

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
//     {   
//         name : "Maou",
//         species : "Felix",
//         nbFeet : 4,
//         food : "meat"
//     },
// ]

// console.log(animals)

// isFelix = (parametre) => {
//     return parametre.species === "Felix";
// }

// const felixFilterFunction =  (element,cbf) => {
//     const newArray = [];
//     let j = 0;
//     for(let i = 0; i<element.length; i++){
//         if(cbf(element[i])){
//             newArray[j] = element[i];
//             j++
//         }
//     }
//     return newArray;
// }

// const arrayOfAnimalFelix = felixFilterFunction(animals,isFelix);
// console.log("hello filter " ,  arrayOfAnimalFelix);



//////////////////////////////////////////// REDUCE /////////////////////////////////

const priceItems = [5,10,15,20] // = 50

const callbackFct = (acc, current) => {
    console.log("acc",acc);
    return acc + current;
}

const billNote = (bills,callbackFct) =>{
    let sum = 0;
    for(let i = 0; i<bills.length; i++){
        if(bills[i+1]=== void undefined){
           break;
        }
        sum =  callbackFct(bills[i],bills[i+1]);
        console.log(sum);
    }
    return sum;
}

console.log(billNote(priceItems,callbackFct));
