//Array
//typeof for reference datatypes always gives object as answer

let myArr = [1, 2, 3, 4, "false"];
console.log(myArr);
console.log(typeof myArr);

let name = {
  firstname: "Karthik",
  lastname: "Panicker",
};

let printMyName = (country1, country2) => {
  console.log(
    this.firstname + " " + this.lastname + " " + country1 + " " + country2
  );
  // console.log(arguments);
};
// printMyName("India", "England");
printMyName.apply(name, ["India", "England"]);

let obj = {
  name: "Karthik",
  y() {
    let x = () => {
      console.log(this.name);
    };
    x();
  },
};
obj.y();

function countryName(name, age) {
  (this.name = name),
    (this.age = age),
    (this.x = function () {
      console.log(this.name + " " + this.age);
    });
}

let newobj = new countryName("Karthik", 20);
newobj.x();
