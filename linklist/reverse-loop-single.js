head = [1,2]
var hasCycle = function(head) {
    
};

var reverseList = function(){
  this.head = null;
  var node = function(data){
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

  this.reverse = function(){
    let curr = this.head;
    let prev = null;

    while(curr != null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    };
    return prev;
  };

  this.isLoop = function(){
    let curr = this.head;
    let prev = null;
    const hashMap = {}
    while(curr != null){
      if(hashMap[curr.data] == undefined){
        hashMap[curr.data] = 1
      }else {
        hashMap[curr.data] += 1
        if(hashMap[curr.data] > 1){
          console.log('loop detected');
          console.log('loop detected start point', curr.data);
          prev.next = null
          break;
        }
      }
      prev = curr;
      curr = curr.next
    }
  }

  this.print = function(){
    let curr = this.head
    let temp = 0;
    let str = ``
    while(curr != null) {
      // if(temp++ >= 9) break
      str += `${curr.data} ->`
      curr = curr.next
    };
    console.log(str);
  }

  this.removeDuplicate = function(){

  };
  
}

const r = new reverseList();
r.add(1);
r.add(2);
r.add(3);
r.add(4);
r.add(5);
// r.print()
// console.log(r.reverse())

console.log('****************** in between *****************');
r.head.next.next.next.next.next = r.head.next;
console.log('loop', (r.head))
r.isLoop()
console.log(r.print())


console.log('****************** head loop *****************');
r.head.next.next.next.next.next = r.head.next.next;
console.log('loop', (r.head))
r.isLoop()
console.log(r.print())

