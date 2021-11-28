const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

//***MAP***
//1. Get array of all names
// console.log(characters.map(res => [res.name , res.gender]));

//2. Get array of all heights
// console.log( characters.map(res => res.height) );
//3. Get array of objects with just name and height properties
// console.log(characters.map(res => ({fname: res.name, my_gender: res.gender})));
//4. Get array of all first names
// console.log( characters.map( res => res.name.split(" ")[0] ) );

// ***REDUCE***
//1. Get total mass of all characters
//console.log(characters.reduce((acc, cur) => acc + parseInt(cur.mass), 0));
//2. Get total height of all characters
//3. Get total number of characters by eye color
// res =>  {blue: 2, yellow: 1, brown: 1}
const countEyeColor = characters.reduce((acc, cur) => {
  const colorEye = cur.eye_color;

  if (acc[colorEye]) { // acc[colorEye] = acc[colorEye] ? acc[colorEye]++ : 1; // not same
    acc[colorEye]++;
  } else {
    acc[colorEye] = 1;
  }

  return acc;
}, {});
console.log(countEyeColor);
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//console.log(characters.filter((res) => res.mass > 100));
//2. Get characters with height less than 200
//console.log(characters.filter((res) => res.height < 200));
//3. Get all male/female characters
//4. Get all female characters
//console.log(characters.filter(res => res.gender === 'female'));

//***SORT***
//1. Sort by mass
// const byMass = characters.sort( (a,b) => b.mass-a.mass );
// console.log(byMass);
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY\ check all same***
//1. Does every character have blue eyes?
console.log(characters.every(res => res.eye_color === 'blue'));
//2. Does every character have mass more than 40?
console.log(characters.every(res => res.mass > 40));
//3. Is every character shorter than 200?
console.log(characters.every(res => res.height < 200));
//4. Is every character male?
console.log(characters.every(res => res.gender === 'male'));

//***SOME = check exists***
//1. Is there at least one male character?
// console.log(characters.some(res => res.gender === 'female'));
//2. Is there at least one character with blue eyes?
// console.log(characters.some(res => res.eye_color === 'blue'));

//3. Is there at least one character taller than 210?
// console.log(characters.some(res => res.height > 210));
//4. Is there at least one character that has mass less than 50?
// const oneMassLessThan50 = characters.some(res => res.mass < 50);
// console.log(oneMassLessThan50);
