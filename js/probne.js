// function getPrice(subscription) {
//     let price = 0;
//     if (subscription === "pro") {
//         price = 100; // Pro subscription price
//     }
//     return price;
// }

// console.log(getPrice("free")); // Outputs: 0
// console.log(getPrice("pro")); // Outputs: 100

// function checkAge(age) {
//     if (age >= 18) {
//       return "You are an adult";
//     }
// }
  
// console.log(checkAge(18));
// const grade = 85;

// if (grade >= 70) {
//   console.log("Satisfactory");
// } else {
//   console.log("Unsatisfactory");
// }

// function checkStorage(available, ordered) {
// if (ordered===0){
//   return "There are no products in the order!"
// }
//   else if (ordered>available){
//     return "Your order is too large, there are not enough items in stock!"
//   }
//   else {
//     return "The order is accepted, our manager will contact you"
//   }
// }
// console.log(checkStorage(100, 50)); // Outputs: "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 0)); // Outputs: "There are no products in the order!"
// console.log(checkStorage(100, 150)); // Outputs: "Your order is too large, there are not enough items in stock!"

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return password === correctPassword ? "Access granted" : "Access denied, wrong password!"
// }
// console.log(checkPassword("jqueryismyjam")); // Outputs: "Access granted"

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//     case "professional":
//       return 20;
//     case "organization":
//       return 50;
//       default:
//         return "Invalid subscription type!";
//   }
// }
// console.log(getSubscriptionPrice("starter")); // Outputs: 0
// console.log(getSubscriptionPrice("professional")); // Outputs: 20
// console.log(getSubscriptionPrice("organization")); // Outputs: 50
// console.log(getSubscriptionPrice("free")); // Outputs: "Invalid subscription type!"

// function checkAccess(subType) {
//   if (subType === "pro" || subType === "vip")
//     return true;
//   else return false;

// }

// function toggleModalVisibility(isVisible) {
//   if (isVisible === true) {
//     return !isVisible;
//   } else {
//     return !isVisible;
//   }
// }
// console.log(toggleModalVisibility(true)); // Outputs: false
// console.log(toggleModalVisibility(false)); // Outputs: true

// const message = "JavaScript is awesome";
// console.log(message.toUpperCase());

// const message = "JAVA";
// console.log(message.toLowerCase());

// function getSubstring(string, length) {
//   const message = string.slice(0, length);
//   return message;
// }
// console.log(getSubstring("Hello, world!", 3)); // Outputs: "Hello"

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext))
//     return "File extension matches";
//   else
//     return "File extension does not match";
// }

// let count = 0;

// while (count <= 5) {
//   console.log(`Count: ${count}`);
//   count +=1;
// }

// let clientCounter = 15;
// const maxClients = 20;

// while (clientCounter < maxClients) {
//   console.log(`Current clients: ${clientCounter}`);
//   clientCounter += 1;
// }

// function countClients(clientCounter, maxClients) {
//   let counter = clientCounter; // створюємо локальну змінну

//   while (counter < maxClients) {
//     console.log(counter);
//     counter += 1;
//   }
// }
// countClients(18, 25);

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;

//   while (i <= number) {
//     total += i;
//     i++;
//   }

//   return total;
// }
// console.log(calculateTotal(18))

// function calculateTotal(number) {
//   let total = 0
//   for (let i = 1; i <= number; i++) {
//     total += i
//   }
//   return total
// }
// console.log(calculateTotal(18))

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;

//   if (number >= 1) {
//     do {
//       total += i;
//       i++;
//     } while (i <= number);
//   }

//   return total;
// }


// function calculateTotal(number) {
//   let total=0
//   for (let i=1; i<=number; i++){
//     total += i
//   }
//   return total
// }
// console.log(calculateTotal(18)) // Outputs: 171