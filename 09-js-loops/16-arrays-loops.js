const nums = [-1, 1, 3, 0, 2, 6, 8];  

// Please find the first even number from the array -> 0

let firstEven;

for(const num of nums) {
  if(num % 2 === 0) {
    firstEven = num;
    break;
  }
}

console.log(firstEven); // 0


// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let firstOddLengthCity;

for(const city of cities) {
  if(city.length % 2 !== 0) {
    firstOddLengthCity = city;
    break;
  }
}

console.log(firstOddLengthCity);


// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]

const citiesWithLength6OrMore = [];

for(const city of cities) {
  if(city.length > 5) citiesWithLength6OrMore.push(city);
}

console.log(citiesWithLength6OrMore);


// ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo']
// Find all the cities that has i or I in it -> [ 'Berlin', 'Chicago', 'Kyiv', 'Istanbul' ]

const citiesWithI = [];

for(const city of cities) {
  if(city.toLowerCase().includes('i')) citiesWithI.push(city);
}

console.log(citiesWithI); // [ 'Berlin', 'Chicago', 'Kyiv', 'Istanbul' ]