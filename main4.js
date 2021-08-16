let person = {
  firstName: "Abdulla",
  lastName: "Jalolov",
  get fullName() {
    console.log(this.firstName + " " + this.lastName);
  },
  set fullName(value) {
    let fullNameArray = value.split(" "); //split operatori array qaytaradi va ularni probel bn ajratib beradi
    this.firstName = fullNameArray[0];
    this.lastName = fullNameArray[1];
  },
};
person.fullName = "Alisher Navoiy";
console.log(person.fullName);
