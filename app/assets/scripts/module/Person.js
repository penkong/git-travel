class Person {
  constructor(fullName, favColor = blue) {
    this.favColor = favColor;
    this.fullName = fullName;
  }
  greet() {
    console.log("hello my name is" + this.fullName + " favorite color" + this.favColor);
  }
}

export default Person;