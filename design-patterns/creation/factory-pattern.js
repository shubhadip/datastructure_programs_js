function Developer(name) {
  this.name = name;
  this.type = 'developer';
}

function Tester(name) {
  this.name = name;
  this.type = 'tester';
}


function EmployeeFactory() {
   this.create = function(name, type){
       switch(type){
         case 1: 
          return new Developer(name);
        case 2: 
          return new Tester(name);
       }
           
   }
}

function say(){
  console.log(this.name + ' ' + this.type);
}


const empFactory = new EmployeeFactory()

const employees = [];
employees.push(empFactory.create('shubh', 1));
employees.push(empFactory.create('deep', 2));

employees.forEach((e)=> {
  say.call(e);
});

