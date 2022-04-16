// 1. A
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var difference = 0;
for(var i = 0; i < ages.length; i++){

  if(ages[i] == ages.slice(-1)[0]){
    difference = ages[i];
    difference -= ages[0];
    console.log(difference)
}
// 1. B
  if(i == 7)
  {
    ages.push(100);
  }
}
// 1. C
var sumOfAges = 0
for (number of ages){
    (sumOfAges += number)
}
average = (sumOfAges / ages.length)
console.log (average);
 
// 2. A & B 

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
var nameLength = [];
var avgName = 0;
var allNames = " ";
for (var i = 0; i < names.length; i++){

  avgName += names.length;
  allNames += " "  + names[i];
  if (i == names.length - 1)
  {
    avgName /= names.length;
    console.log(avgName)
    console.log(allNames)  
  }
  nameLength.push((names[i]).length)
}
console.log(nameLength)
// 3.  to access the last elementy in an array you can use the following:
//     names[5] //or
//    (names.length - 1)
// 4.  to access the first element in an array you can use:
//    names[0]
// 5. 
nameLengths = [3, 5, 3, 5, 4, 3]
// 6. 
var sum = 0
for (i = 0; i < nameLengths.length; i++){
 ( sum += nameLengths[i]).length
}console.log(sum)
// 7.
seven("Hello" , 3)
function seven(word, n){
  var phrase = word;
  for(var i = 1; i < n; i++){
    phrase += word
  }
  console.log(phrase);
  return true;
}
// 8. 
var fist
function fullName(firstname , lastName){
  console.log (firstname + " " + lastName)
}
fullName("Jace", "Schaaf")
// 9. 
array = [23, 34, 56, 45,]

 function overHundred(array){
   let total = array.reduce(function(accumulator, currentValue){
     return accumulator + currentValue;
   });
   if (total > 100){
     return true;}
     else{
       return false;
     }
   }
console.log(overHundred(array))
// 10.
avg = 0
listOfNumbers = [1, 3, 5]
avgNumber(listOfNumbers)

function avgNumber(listOfNumbers){
  for (i = 0; i < listOfNumbers.length; i++){
 avg += listOfNumbers[i]
  }avg /= listOfNumbers.length
}console.log(avg)
// 11.
var avg1 = 0
var avg2 = 0
array1 = [2, 4, 6]
array2 = [1, 3, 5]
function greaterAvg(array1, array2){
  for (i =0; i < array1.length; i++){
    avg1 += array1[i]
    avg1 /= array1.length
  } for (e = 0; e < array2,length; e++){
    avg2 += array2[e]
    avg2 /= array2.length
  }if(avg1 > avg2){
    return true;
  }

  }
  console.log(greaterAvg(array1, array2))
// 12. 
function willBuyDrink(isHotOutside, moneyInPocket){
  if (isHotOutside > 75 && moneyInPocket >= 10.50){
    return true;
  }else {
    return false;
  }
}console.log(willBuyDrink(80, 11.00))
//13. 
function willEat(calories){
  if
    (calories >= 1800){
      return false;
    }else {
      return true;
    }
  }
console.log(willEat(1700))

// I made a function that lets me input the amount of calories eaten today and will tell me true or false if i can intake more food or not. If ive already eaten 1800 or more then it 
//will return false.
// if ive eaten any less than 1800 it will return true meaning i can eat more.
