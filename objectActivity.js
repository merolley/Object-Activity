//crating an object called car with the properties type, model, and color
let car = {
    type: "Minivan",
    model: "Honda Odyssey",
    color: "Silver"
};
//using typeof to check the type of the object
console.log("Type of car object:", typeof car);

//updating the type property to toyota 
car.type = "Toyota";
console.log("Updated car object:", car);

//adding new property wheels with the value 4 
car.wheels = 4;
console.log("New property wheels:", car);
