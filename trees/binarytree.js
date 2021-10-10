const btree = function(){
  this.root = null;
  
  var node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  };

  this.add = function(data) {
    const n = new node(data)
    if(this.root === null) {
      this.root = n;
    }else{
      const root = this.root;
      this.search = function(rootNode){
        if(data < rootNode.data) {
          if(rootNode.left == null) {
            const n = new node(data);
            rootNode.left = n;
          }else{
            this.search(rootNode.left)
          }
        }else if(data > rootNode.data){
          if(rootNode.right == null) {
            const n = new node(data);
            rootNode.right = n;
          }else{
            this.search(rootNode.right)
          }
        };  
      };

      this.search(root)
    }
  };

}

const bt = new btree();
bt.add(10)
bt.add(15)
bt.add(13)
bt.add(18)
bt.add(5)
bt.add(1)
bt.add(7)

console.log(JSON.stringify(bt));