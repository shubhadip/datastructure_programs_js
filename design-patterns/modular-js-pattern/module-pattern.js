function EmployeeDetails() {
  const name = "Mayank";
  const age = 30;
  const designation = "Developer"
  var salary = 10000;

  var calculateSalaryBonus = function(amount) {
    salary = salary + amount;
    return salary;
  }

  return {
    name: name,
    age: age,
    designation: designation,
    calculateSalaryBonus:calculateSalaryBonus
  }
}

const newEmployee = EmployeeDetails()

const userName = newEmployee.name;
const userAge = newEmployee.age;
const userDesignation = newEmployee.designation;

console.log(newEmployee.salary) // undefined


var userName = newEmployee.calculateSalaryBonus(1000);
