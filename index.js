const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }
const titleCased = () => {
  const capitalizeArray = stringArray => stringArray.map(arr =>
    arr.split(' ').map(word =>
      word[0].toUpperCase() + word.slice(1)).join(' ')
  );
  const capitalizedArrays = capitalizeArray(tutorials);
  return capitalizedArrays
}
console.log(titleCased());



// Brainstorm
// function titleCased(arr){
//   return arr.toString().split(' ').map(element=> {
//     return (element.charAt(0).toUpperCase() + element.slice(1));
//   });
//   //.toString().charAt(0).toUpperCase() + arr.slice(1);
// }
