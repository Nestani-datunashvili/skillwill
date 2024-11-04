// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორეელემენტი - მესამე ელემენტიდანდაწყებული ყველა დანარჩენის ნამრავლი

// let handleNumbers = (...numbers) => {
//   if (numbers.length <= 2) {
//     return "Enter more than 2 numbers";
//   }

//   let sumOfFirstTwo = numbers[0] + numbers[1];
//   let restMultiple = numbers.slice(2).reduce((accumulator, currentValue) => {
//     return accumulator * currentValue;
//   }, 1);

//   return [sumOfFirstTwo, restMultiple];
// };

// const result = handleNumbers(1, 2, 4, 5, 6);

// console.log(result);

// დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city. დაწერე ფუნქცია, რომელიც
// პარამეტრად მიიღებს user ობიექტს და დააბრუნებს cityს. გამოიყენე destructuring-ი. თუ ასეთი
// ველი არ არსებობს უნდა დაბრუნდესundefined

// let users = {
//   info: [
//     {},
//     {},
//     {
//       address: {
//         city: "Tbilisi",
//       },
//     },
//   ],
// };

// const getCityFromUsers = (users) => {
//   const { info } = users;

//   if (info && info[2] && info[2].address) {
//     const { city } = info[2].address;
//     return city;
//   }
//   return undefined;
// };

// console.log(getCityFromUsers(users));

// დაწერე ფუნქცია, რომელიც პარამეტრად   მიიღებს ნებისმიერ ობიექტს და  დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს
//  გაითვალისწინე, რომ თუ ობიექტში კიდევ
// სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას   გამოიყენეთ (...) ოპერატორი

let user = {
  name: "nestani",
  lastName: "Joe",
  adress: {
    city: "Tbilisi",
  },
  number: [1, 2, 3],
};

let copyObj = (obj) => {
  let copyObj = {
    ...obj,
    address: { ...obj.address },
    number: [...obj.number],
  };
  return copyObj;
};

console.log(copyObj(user));
