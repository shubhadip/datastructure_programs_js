var Bst  = function(){
    this.root = null;

    var Node = function(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    this.add = function(value){
        if(this.root == null){
            this.root = new Node(value)
            return
        }else{
            const searchTree = function(root){
                if(value < root.data){
                    if(root.left == null){
                        root.left = new Node(value)
                        return 
                    }else if(root.left != null){
                        return searchTree(root.left)
                    }
                }else if(value>root.data){
                    if(root.right == null){
                        root.right = new Node(value)
                        return 
                    }else if(root.right != null){
                        return searchTree(root.right)
                    }
                } else {
                    return null
                }
            }
            return searchTree(this.root)
        }
    }

    this.findMin = function(){
        let current = this.root
        while(current.left != null){
            current = current.left
        }
        return current.data
    }

    this.findMax = function(){
        let current = this.root
        while(current.right != null){
            current = current.right
        }
        return current.data
    }

    this.find = function(data){
        let current = this.root
        while(current.data != data){
            if(data < current.data){
                console.log(current.data);
                current = current.left
            }else{
                current = current.right
            }
            if(current == null){
                return false
            }
        }
        return current
    }

}

this.remove = function(data){
    var removeNode = function(node, data){
        if(node == null){
            return null
        }
        if(data == node.data){
            if(node.left == null && node.right == null){
                return null
            }
            if(node.left == null){
                return node.right
            }
            if(node.right == null){
                return node.left
            }
            var tempNode = node.right
            while(tempNode.left != null){
                tempNode = tempNode.left
            }
            root.data = tempNode.data
            root.right = removeNode(root.right, data)
        }else if(data < node.data){
            node.left = removeNode(node.left, data)
            return node
        }else{
            node.right = removeNode(node.right, data)
            return node
    }
    
    this.root = removeNode(this.root, data);
}

var binaryTree = new Bst()

binaryTree.add(123)
binaryTree.add(234)
binaryTree.add(101)
binaryTree.add(456)
binaryTree.add(567)

binaryTree.remove(101)
console.log('binaryTree',binaryTree)
    
    
    
