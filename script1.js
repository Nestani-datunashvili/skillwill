// let users = [
//   { name: "Temo", age: 25 },
//   { name: "Lasha", age: 21 },
//   { name: "Ana", age: 28 },
// ];
// // task 1 -------------------
// let younger = (users) => {
//   let ages = users.map((user) => user.age);
//   return Math.min(...ages);
// };
// let result = younger(users);
// console.log(result);
// task 2 ---------
// let user = {
//   name: "nestani",
//   lastName: "datunashvili",
//   age: 28,
// };
// let newObJ = (user) => {
//   const newObject = {};
//   Object.entries(user).forEach((entry) => {
//     newObject[entry[0]] = entry[1];
//   });
//   return newObject;
// };
// let result = newObJ(user);
// console.log(result);
// console.log(user);
// task 3 ---------------

const rollDice = () => Math.floor(Math.random() * 6) + 1;

let checkWinner = () => {
  let attemptsA = 0;
  let attemptsB = 0;
  let rollA, rollB;

  while (true) {
    // A
    rollA = rollDice();
    attemptsA++;
    console.log(`Player A rolled: ${rollA}`);

    if (rollA === 3) {
      console.log(`Player A wins with ${attemptsA} attempts!`);
      return `Winner: Player A`;
    }

    // B
    rollB = rollDice();
    attemptsB++;
    console.log(`Player B rolled: ${rollB}`);

    if (rollB === 3) {
      console.log(`Player B wins with ${attemptsB} attempts!`);
      return `Winner: Player B`;
    }
  }
};

console.log(checkWinner());
