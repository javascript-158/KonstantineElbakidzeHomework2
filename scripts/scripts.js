let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
console.log(typeof color);

console.log(color[0]);

console.log(color[color.length-1]);

let o = ["th","st","nd","rd"];

console.log("1" + o[1] + " choice is " + color[0]);
console.log("2" + o[2] + " choice is " + color[1]);
console.log("3" + o[3] + " choice is " + color[2]);
console.log("4" + o[0] + " choice is " + color[3]);
console.log("5" + o[0] + " choice is " + color[4]);
console.log("6" + o[0] + " choice is " + color[5]);
console.log("7" + o[0] + " choice is " + color[6]);

let student = {
    firstName: "Konstantine" ,
    lastName: "Elbakidze" ,
    age: "21",
    birthday: "21 september"
}

delete student.birthday;
console.log(student.birthday);

student.address = "Tbilisi";
console.log(student);

student.age = "24";
console.log(student);









