// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.

function question1 () {

  let average = 0;
  let sum = 0;

  for (let i = 0; i < data.length; i++){
    sum += (data[i].price);
    average = (sum/data.length);
  }
  console.log(`The average price is $ ${average.toFixed(2)}.`);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

function question2 () {

  let range = [];

  for (let i = 0; i < data.length; i++){
    if (data[i].price >= 14 && data[i].price <= 18){
      range.push(data[i].title);
    }
  }
  console.log(range);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let Unique = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].currency_code === "GBP"){
      Unique.push(data[i].title);
    }
  }
  console.log(Unique);
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let Single = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].materials.includes("wood")){
      Single.push(data[i].title);
    }
  }
  console.log(Single);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
//   let Multiple = [];
//   let count = 0;
//   for (let i = 0; i < data.length; i++){
//     if (data[i].materials.length >= 8){
//       Multiple.push(data[i].title);
//     }
//     for (let j = 0; j < data.length; j++){
//       if (data[j].materials.length >= 8){
//         (" has " + count(data[j].materials) + " materials:");
//       }
//     }
//   }
//   console.log(Multiple);
//   console.log(count);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let Entr = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].who_made === "i_did"){
      Entr.push(data[i].title);
    }
  }
  console.log(Entr.count + " items were made by their sellers.");
}
