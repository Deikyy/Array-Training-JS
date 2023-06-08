// Declare an empty array
const emptyArray = [];

// Declare an array with more than 5 elements
const numbers = [1, 2, 3, 4, 5, 6];

// Find the length of your array
const numbersLength = numbers.length;
console.log(numbersLength); // Output: 6

// Get the first item, the middle item, and the last item of the array
const firstItem = numbers[0];
const middleItem = numbers[Math.floor(numbers.length / 2)];
const lastItem = numbers[numbers.length - 1];
console.log(firstItem); // Output: 1
console.log(middleItem); // Output: 4
console.log(lastItem); // Output: 6

// Declare an array called mixedDataTypes
const mixedDataTypes = [1, 'two', true, null, undefined];
const mixedDataTypesLength = mixedDataTypes.length;
console.log(mixedDataTypesLength); // Output: 5

// Declare an array variable called itCompanies
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array
console.log(itCompanies);

// Print the number of companies in the array
const numOfCompanies = itCompanies.length;
console.log(numOfCompanies); // Output: 7

// Print the first company, middle company, and last company
const companyPertama = itCompanies[0];
const companyTengah = itCompanies[Math.floor(itCompanies.length / 2)];
const companyLast = itCompanies[itCompanies.length - 1];
console.log(companyPertama);
console.log(companyTengah);
console.log(companyLast);

// Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i])
}

// Change each company name to uppercase one by one and print them out
for (let i; i < itCompanies.length; i++){
  let upperCaseCompany = itCompanies[i].toUpperCase;
  console.log(upperCaseCompany);
}

// Print the array as a sentence
const itCompaniesSentence = itCompanies.join(', ') + ' are big IT companies.';
console.log(itCompaniesSentence); // Output: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon are big IT companies.

// Check if a certain company exists in the itCompanies array
const searchCompany = 'Microsoft';
if (itCompanies.includes(searchCompany)) {
  console.log(searchCompany + ' exists in the array.');
} else {
  console.log(searchCompany + ' does not exist in the array.');
}

// Filter out companies which have more than one 'o'
const filteredCompanies = itCompanies.filter(company => {
  const oCount = company.toLowerCase().split('o').length - 1;
  return oCount <= 1;
});
console.log(filteredCompanies); // Output: ["Google", "Apple", "IBM"]

// Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies); // Output: ["Amazon", "Apple", "Facebook", "Google", "IBM", "Microsoft", "Oracle"]

// Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies); // Output: ["Oracle", "Microsoft", "IBM", "Google", "Facebook", "Apple", "Amazon"]

// Slice out the first 3 companies from the array
const firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies); // Output: ["Oracle", "Microsoft", "IBM"]

// Slice out the last 3 companies from the array
const lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies); // Output: ["Facebook", "Apple", "Amazon"]

// Slice out the middle IT company or companies from the array
const middleCompanies = itCompanies.slice(2, -2);
console.log(middleCompanies); // Output: ["IBM", "Google"]

// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies); // Output: ["Microsoft", "IBM", "Google", "Facebook", "Apple", "Amazon"]

// Remove the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex, 1);
console.log(itCompanies); // Output: ["Microsoft", "Google", "Facebook", "Apple", "Amazon"]

// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies); // Output: ["Microsoft", "Google", "Facebook", "Apple"]

// Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies); // Output: []

