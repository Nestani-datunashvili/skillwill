// დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith), ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ stringს

// let replaceStr = (string, valueToReplace, valueToReplaceWith) => {
//   let strIndex = string.indexOf(valueToReplace);

//   if (strIndex === -1) {
//     return string;
//   }

//   let newStr =
//     string.substring(0, strIndex) +
//     valueToReplaceWith +
//     string.substring(strIndex + valueToReplace.length);

//   return newStr;
// };

// console.log(replaceStr("demetre datunashvili", "datunashvili", "bekauri"));

// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას

// let strUpperCase = (str) => {
//   const words = str.split(" ");

//   const capitalizeFirstLetter = words
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
//   return capitalizeFirstLetter;
// };

// console.log(strUpperCase("i love you"));

// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს მომხმარებლების ასაკის ზრდადობის მიხედვით

// let ageArr = [5, 8, 9, 33, 2221, 32, -33, -9];

// let sortArr = (arr) => arr.sort((a, b) => a - b);

// console.log(sortArr(ageArr));

//====================

let users = [
  { name: "Vache", age: 76 },
  { name: "Lasha", age: 30 },
  { name: "Luka", age: 44 },
  { name: "Saba", age: 20 },
];

let sortAge = (arr) => {
  return users.slice().sort((a, b) => a.age - b.age);
};

console.log(sortAge(users));
