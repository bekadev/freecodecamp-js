// let character = 'Hello World!!';
// console.log(character);
//
// const dom = 1 + 2
// console.log(dom)
//

// let character = 'Hello';
// console.log(character);
// character = "World";
// console.log(character);

// let character = 'Hello';
// console.log(character);
// character = "World";
// console.log(character);
// let secondCharacter = 1;
// console.log(secondCharacter);

// let character = 'Hello';
// character = "Hello";

// let profession = "teacher";
// let age;
// console.log(profession)
// console.log(age)
//
// let count = 8
// console.log(count + 1)
// console.log(count - 1);
// console.log(count * 1);
// console.log(count / 1);

// let rows = ["Naomi", "Quincy", "CamperChan"];
// console.log(rows[0])
// rows[2] = 10
// console.log(rows)
// console.log(rows[rows.length - 1])

// let cities = [ "London", "New York", "Mumbai" ]
// console.log(cities)
// cities[cities.length - 1] = "Mexico City"
// console.log(cities)

// let rows = ["Naomi", "Quincy", "CamperChan"];
// rows.push("freeCodeCamp")
//
// console.log(rows);

// let rows = ["Naomi", "Quincy", "CamperChan"];
// rows.push("freeCodeCamp");
//
// let popped = rows.pop()
// console.log(popped)
//
// console.log(rows);
// let pushed = rows.push("freeCodeCamp");
// console.log(pushed)

// const character = "#";
// const count = 8;
// const rows = [];

// for (let i = 0; i < count; i = i + 1) {
//   ows.push(character.repeat(i + 1));
// }
//
// for (const row of rows) {
// result = result + "\n" =+ row
// }

// function padRow() {
//
// }
// padRow()

// for (let i = 1; i <= count; i++) {
//   rows.push(padRow(i, count));
// }

// const character = "!";
// const count = 10;
// const rows = [];
// let inverted = false;
//
// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
//
// for (let i = 1; i <= count; i++) {
//   if (inverted) {
//     rows.unshift(padRow(i, count));
//   } else {
//     rows.push(padRow(i, count));
//   }
// }
//
// let result = ""
//
// for (const row of rows) {
//   result = result + "\n" + row;
// }
//
// console.log(result);

// const test = 10;
// let test1 = 10
//
// console.log(test === test1)
// function f(a, b) {
//   return (a + b) === test
// }
//
// console.log(f(1, 2));

// const asyncFunction = async () => {
//   return new Promise(resolve => setTimeout(resolve, 1000));
// }
//
// console.log(asyncFunction())

// <fieldset id="breakfast">
//   <legend>Breakfast</legend>
//   <div className="input-container"></div>
// </fieldset>

// <div className="controls">
//             <span>
//               <label htmlFor="entry-dropdown">Add food or exercise:</label>
//               <select id="entry-dropdown" name="options">
//                 <option value="breakfast" selected>Breakfast</option>
//                 <option value="lunch">Lunch</option>
//                 <option value="dinner">Dinner</option>
//                 <option value="snacks">Snacks</option>
//                 <option value="exercise">Exercise</option>
//               </select>
//               <button type="button" id="add-entry">Add Entry</button>
//             </span>
// </div>

// function getCaloriesFromInputs(list) {
//   let calories = 0;
//
//   for (const item of list) {
//     const currVal = cleanInputString(item.value);
//     const invalidInputMatch = isInvalidInput(currVal);
//     if (invalidInputMatch) {
// alert(`Invalid Input: ${invalidInputMatch[0]}`);

//       continue; // Skip this iteration if the input is invalid
//     }
//
//   }
// }