var singleLinklist = function() {
  this.head = null;

  var node = function(data) {
    this.data = data;
    this.next = null;
  };

  this.add = function(data) {
    var n = new node(data);
    if(this.head === null) {
      this.head = n;
    }else{
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next
      };
      currentNode.next = n;
    }
  };

  this.print = function(){
    let currentNode = this.head;
    let str = ''
    while(currentNode) {
      str  += currentNode.data + '->'
      currentNode = currentNode.next
    }
    console.log('connect', str);
  };

  this.search = function(tobeSearched){
    let currentNode = this.head;
    let isAvail = false
      while(currentNode) {
        if(currentNode.data === tobeSearched) {
          isAvail = true
        }
        currentNode = currentNode.next
      }
      return isAvail;
  };


  this.delete = function(tobeSearched){
    let currentNode = this.head;
    let prevpointer;

      while(currentNode) {
        if(currentNode.data === tobeSearched) {
          isAvail = true
          break;
        }else{
          prevpointer = currentNode
          currentNode = currentNode.next
        } 
      }
      prevpointer.next = currentNode.next
  };

  this.reverseList = () => {
    let prev = null;
    let currentNode = this.head;

    while(currentNode != null) {
      const next = currentNode.next
      currentNode.next = prev;
      
      prev = currentNode
      currentNode = next;
    }
    return prev;
  };

}

const single = new singleLinklist();
single.add(10);
single.add(20);
single.add(30);
single.add(40);
single.add(50);

console.log(JSON.stringify(single));
single.print();
console.log(single.search(12));
console.log(single.delete(30));
single.print();
console.log(single.reverseList())