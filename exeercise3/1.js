// The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.]

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]; 
// sorting array and find the max and min
ages.sort((a,b) => a - b);
console.log(ages);
// sorting descending 
ages.sort((a,b) => b-a);
console.log(ages);
// minimum value 
const min = Math.min(...ages);
console.log(min);
// maximum value 
const max = Math.max(...ages);
console.log(max);

// find the median 
ages.sort((a,b) => a-b);
console.log(ages); 

const medianIndex = Math.floor(ages.length / 2);
let median; 

if (ages.length % 2 === 0) {
    median = (ages[medianIndex] + ages[medianIndex - 1]) / 2
} else {
    median = ages[medianIndex];
}
console.log(median);

// find the average of array 

let sum = 0;

for (let i = 0; i < ages.length; i++) {
    sum += ages[i]
} 
const average = sum / ages.length;
console.log(average);

// range between max and min 
const range = max - min;
console.log(range)

// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

const diffMin = Math.abs(min - average); 
const diffMax = Math.abs(max - average); 

console.log(diffMax);
console.log(diffMin);

// 
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]; 
  const slicedCountries = countries.slice(0, 10);
  let middleCountries; 

  if (countries.length % 2 === 0) {
    const middleIndex = countries.length / 2;
    middleCountries = countries.slice(middleIndex - 1, middleIndex + 1);
  } else {
    const middleIndex = Math.floor(countries.length / 2);
    middleCountries = countries.slice(middleIndex, middleIndex + 1);
  } 

  console.log(middleCountries);